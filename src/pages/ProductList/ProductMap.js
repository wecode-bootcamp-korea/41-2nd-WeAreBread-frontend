import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import * as ReactDOM from 'react-dom';
import { useMap, Map, MapMarker, AbstractOverlay } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const TooltipMarker = ({ position, tooltipText }) => {
  const map = useMap();
  const node = useRef(document.createElement('div'));
  const [visible, setVisible] = useState(false);
  const [tracerPosition, setTracerPosition] = useState({
    x: 0,
    y: 0,
  });
  const [tracerAngle, setTracerAngle] = useState(0);

  const positionLatlng = useMemo(() => {
    return new kakao.maps.LatLng(position.lat, position.lng);
  }, [position.lat, position.lng]);

  function onAdd() {
    const panel = this.getPanels().overlayLayer;
    panel.appendChild(node.current);
  }

  function onRemove() {
    node.current.parentNode.removeChild(node.current);
  }
  function draw() {
    const projection = this.getProjection();
    const point = projection.pointFromCoords(positionLatlng);
    const width = node.current.offsetWidth;
    const height = node.current.offsetHeight;

    node.current.style.left = point.x - width / 2 + 'px';
    node.current.style.top = point.y - height / 2 + 'px';
  }

  const OUTCODE = {
    INSIDE: 0,
    TOP: 8,
    RIGHT: 2,
    BOTTOM: 4,
    LEFT: 1,
  };

  const BOUNDS_BUFFER = 30;

  const CLIP_BUFFER = 40;

  const Marker = ({ tooltipText }) => {
    const [isOver, setIsOver] = useState(false);
    return (
      <div
        className="node"
        onMouseOver={() => setIsOver(true)}
        onMouseOut={() => setIsOver(false)}
      >
        {isOver && <div className="tooltip">{tooltipText}</div>}
      </div>
    );
  };

  const Tracker = ({ position, angle }) => {
    return (
      <div
        className="tracker"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        onClick={() => {
          map.setCenter(positionLatlng);
          setVisible(false);
        }}
      >
        <div
          className="balloon"
          style={{
            transform: `rotate(${angle}deg)`,
          }}
        />
        <div className="icon" />
      </div>
    );
  };

  const getClipPosition = useCallback(
    (top, right, bottom, left, inner, outer) => {
      const calcOutcode = (x, y) => {
        let outcode = OUTCODE.INSIDE;

        if (x < left) {
          outcode |= OUTCODE.LEFT;
        } else if (x > right) {
          outcode |= OUTCODE.RIGHT;
        }

        if (y < top) {
          outcode |= OUTCODE.TOP;
        } else if (y > bottom) {
          outcode |= OUTCODE.BOTTOM;
        }

        return outcode;
      };

      let ix = inner.x;
      let iy = inner.y;
      let ox = outer.x;
      let oy = outer.y;

      let code = calcOutcode(ox, oy);

      while (true) {
        if (!code) {
          break;
        }

        if (code & OUTCODE.TOP) {
          ox = ox + ((ix - ox) / (iy - oy)) * (top - oy);
          oy = top;
        } else if (code & OUTCODE.RIGHT) {
          oy = oy + ((iy - oy) / (ix - ox)) * (right - ox);
          ox = right;
        } else if (code & OUTCODE.BOTTOM) {
          ox = ox + ((ix - ox) / (iy - oy)) * (bottom - oy);
          oy = bottom;
        } else if (code & OUTCODE.LEFT) {
          oy = oy + ((iy - oy) / (ix - ox)) * (left - ox);
          ox = left;
        }

        code = calcOutcode(ox, oy);
      }

      return { x: ox, y: oy };
    },
    [OUTCODE.BOTTOM, OUTCODE.INSIDE, OUTCODE.LEFT, OUTCODE.RIGHT, OUTCODE.TOP]
  );

  const getAngle = (center, target) => {
    const dx = target.x - center.x;
    const dy = center.y - target.y;
    const deg = (Math.atan2(dy, dx) * 180) / Math.PI;

    return ((-deg + 360) % 360 | 0) + 90;
  };

  const tracking = useCallback(() => {
    const proj = map.getProjection();

    const bounds = map.getBounds();

    const extBounds = extendBounds(bounds, proj);

    if (extBounds.contain(positionLatlng)) {
      setVisible(false);
    } else {
      const pos = proj.containerPointFromCoords(positionLatlng);
      const center = proj.containerPointFromCoords(map.getCenter());

      const sw = proj.containerPointFromCoords(bounds.getSouthWest());
      const ne = proj.containerPointFromCoords(bounds.getNorthEast());

      const top = ne.y + CLIP_BUFFER;
      const right = ne.x - CLIP_BUFFER;
      const bottom = sw.y - CLIP_BUFFER;
      const left = sw.x + CLIP_BUFFER;

      const clipPosition = getClipPosition(
        top,
        right,
        bottom,
        left,
        center,
        pos
      );

      setTracerPosition(clipPosition);

      const angle = getAngle(center, pos);

      setTracerAngle(angle);

      setVisible(true);
    }
  }, [getClipPosition, map, positionLatlng]);

  const hideTracker = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    node.current.style.position = 'absolute';
    node.current.style.whiteSpace = 'nowrap';
  }, []);

  const extendBounds = (bounds, proj) => {
    const sw = proj.pointFromCoords(bounds.getSouthWest());
    const ne = proj.pointFromCoords(bounds.getNorthEast());

    sw.x -= BOUNDS_BUFFER;
    sw.y += BOUNDS_BUFFER;

    ne.x += BOUNDS_BUFFER;
    ne.y -= BOUNDS_BUFFER;

    return new kakao.maps.LatLngBounds(
      proj.coordsFromPoint(sw),
      proj.coordsFromPoint(ne)
    );
  };

  useEffect(() => {
    kakao.maps.event.addListener(map, 'zoom_start', hideTracker);
    kakao.maps.event.addListener(map, 'zoom_changed', tracking);
    kakao.maps.event.addListener(map, 'center_changed', tracking);
    tracking();

    return () => {
      kakao.maps.event.removeListener(map, 'zoom_start', hideTracker);
      kakao.maps.event.removeListener(map, 'zoom_changed', tracking);
      kakao.maps.event.removeListener(map, 'center_changed', tracking);
      setVisible(false);
    };
  }, [map, hideTracker, tracking]);

  return (
    <>
      <AbstractOverlay onAdd={onAdd} onRemove={onRemove} draw={draw} />
      {visible
        ? ReactDOM.createPortal(
            <Tracker position={tracerPosition} angle={tracerAngle} />,
            map.getNode()
          )
        : ReactDOM.createPortal(
            <Marker tooltipText={tooltipText} />,
            node.current
          )}
    </>
  );
};

/*global kakao*/
const ProductMap = ({ mapCenter, currentLocation, geoLocationError, item }) => {
  return (
    <S.Wrapper>
      {mapCenter.lat !== 0 && (
        <Map
          center={mapCenter}
          isPanto={true}
          style={{
            border: 'none',
            borderRadius: '14px',
            marginLeft: '35px',
            width: '1000px',
            height: '450px',
          }}
          level={5}
        >
          {!geoLocationError && currentLocation ? (
            <MapMarker position={currentLocation} />
          ) : (
            <></>
          )}
          {item.map(markerData => (
            <TooltipMarker
              key={`TooltipMarker-${markerData.shopName}`}
              position={{ lat: markerData.lat, lng: markerData.lng }}
              tooltipText={markerData.name}
            />
          ))}
        </Map>
      )}
    </S.Wrapper>
  );
};

export default ProductMap;

const S = {
  Wrapper: styled.div`
    .node {
      position: absolute;
      background-image: url(https://cdn-icons-png.flaticon.com/512/5816/5816313.png);
      cursor: pointer;
      width: 60px;
      height: 60px;
      background-size: cover;
    }
    .tooltip {
      background-color: #fff;
      position: absolute;
      border: 2px solid #333;
      font-size: 25px;
      font-weight: bold;
      padding-left: 1px;
      left: 65px;
      top: 14px;
      border-radius: 5px;
      white-space: nowrap;
    }

    .tracker {
      position: absolute;
      margin: -35px 0 0 -30px;
      cursor: pointer;
      z-index: 3;
    }

    .icon {
      position: absolute;
      left: 10px;
      top: 13px;
      width: 40px;
      height: 40px;
      background-image: url(https://cdn-icons-png.flaticon.com/512/5816/5816313.png);
      background-size: cover;
    }

    .balloon {
      position: absolute;
      width: 60px;
      height: 60px;
      background-image: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/balloon.png);
      -ms-transform-origin: 50% 34px;
      -webkit-transform-origin: 50% 34px;
      transform-origin: 50% 34px;
    }
  `,
};
