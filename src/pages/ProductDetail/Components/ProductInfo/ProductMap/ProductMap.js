import { style } from '@mui/system';
import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const ProductMap = ({ shopContent }) => {
  return (
    <ProductMapWrap>
      <Map
        className="map"
        center={{ lat: 37.571503, lng: 126.97904 }}
        style={{ width: '300px', height: '160px', borderRadius: '10px' }}
      >
        <MapMarker position={{ lat: 37.571503, lng: 126.97904 }}>
          <div
            style={{
              color: '#fff',
              background: '#a8d38b',
              padding: '5px',
              fontSize: '15px',
              border: 'none',
              borderRadius: '5px',
              margin: '-5px',
              zIndex: '1',
            }}
          >
            {shopContent.name}
          </div>
        </MapMarker>
      </Map>
    </ProductMapWrap>
  );
};

export default ProductMap;

const ProductMapWrap = styled.div`
  .map {
    background-color: aliceblue;
  }
`;
