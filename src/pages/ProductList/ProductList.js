import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TbCurrentLocation } from 'react-icons/tb';
import { FaRegShareSquare } from 'react-icons/fa';
import ProductMap from './ProductMap';
import ProductItem from './ProductItem';
import * as Styled from './ProductListStyles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const sort = searchParams.get('sort');

  const [offset, setOffset] = useState(0);

  const limit = 5;

  useEffect(() => {
    fetch(
      `https://138.2.112.49:3000/shops?search=${search}&_offset=${offset}&_limit=${limit}&sort=${
        sort || 'likes'
      }`,
      {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzQyNjIwfQ.pxyYTyRX1MU_EKvMC9a8KfWFxfSkiw-rzTt80-0j78Y',
        },
      }
    )
      .then(response => response.json())
      .then(result => setPins(result));
  }, [search, offset, sort]);

  const [pins, setPins] = useState([]);
  const [scroll, setScroll] = useState(1);

  const fetchPins = async scroll => {
    const res = await fetch(
      `https://138.2.112.49:3000/shops?search=${search}&_offset=${offset}&_limit=${limit}&sort=${
        sort || 'likes'
      }?scroll=${scroll}`
    );
    const data = await res.json();

    setPins(prev => [...prev, ...data]);
  };

  useEffect(() => {
    fetchPins(scroll);
  }, [scroll]);

  const loadMore = () => {
    setScroll(prev => prev + 1);
  };

  const pageEnd = useRef(null);

  useEffect(() => {
    if (pageEnd.current) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 0.7 }
      );
      observer.observe(pageEnd.current);
    }
  }, [pageEnd]);

  /////////////////////////////////////////////

  const currentUrl = window.location.href;

  const [mapCenter, setMapCenter] = useState({
    lat: 33.452613,
    lng: 126.570888,
  });
  const [currentLocation, setCurrentLocation] = useState();
  const [isCurrentLocationLoading, setIsCurrentLocationLoading] =
    useState(false);

  const [error, setError] = useState();
  const handleSuccess = pos => {
    const { latitude, longitude } = pos.coords;

    setCurrentLocation({
      lat: latitude,
      lng: longitude,
    });
    setMapCenter({
      lat: latitude,
      lng: longitude,
    });
    setIsCurrentLocationLoading(false);
  };
  const handleError = error => {
    setError(error.message);
    isCurrentLocationLoading(false);
  };

  const getGeoLocation = () => {
    setIsCurrentLocationLoading(true);
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      isCurrentLocationLoading(false);
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: false,
    });
  };

  return (
    <Styled.Background>
      <Styled.Body>
        <Styled.SortContents>
          <Styled.SortList>
            <Styled.Order
            // onClick={() => {
            //   sort.likes;
            // }}
            >
              좋아요 많은순
            </Styled.Order>
            <Styled.Order
            // onClick={() => {
            //   sort.reviews;
            // }}
            >
              리뷰 많은순
            </Styled.Order>
            <Styled.Order
            // onClick={() => {
            //   sort.rates;
            // }}
            >
              평점순
            </Styled.Order>
          </Styled.SortList>
          <Styled.CurrentLocation>
            <Styled.HoverButton onClick={getGeoLocation}>
              <Styled.CurrentIcon>
                <TbCurrentLocation />
              </Styled.CurrentIcon>
              <Styled.CurrentName>{`현 위치 : ${
                isCurrentLocationLoading
                  ? '불러오는중'
                  : currentLocation
                  ? `위도 : ${currentLocation.lat}, 경도: ${currentLocation.lng}`
                  : '위치 없음'
              }`}</Styled.CurrentName>
            </Styled.HoverButton>
          </Styled.CurrentLocation>
        </Styled.SortContents>
        <Styled.MapHeader>
          <Styled.MapTitle>
            <Styled.SubTitle>{search}</Styled.SubTitle>
            <Styled.SubInfo>
              맛집(
              <Styled.PlaceCount>{(10000).toLocaleString()}+</Styled.PlaceCount>
              곳)
            </Styled.SubInfo>
          </Styled.MapTitle>
          <Styled.ShareIcon>
            <CopyToClipboard
              text={currentUrl}
              onCopy={() => alert('클립보드에 복사되었습니다.')}
            >
              <FaRegShareSquare className="share" />
            </CopyToClipboard>
          </Styled.ShareIcon>
        </Styled.MapHeader>
        <ProductMap
          mapCenter={mapCenter}
          currentLocation={currentLocation}
          geoLocationError={error}
        />
        {pins.map(store => {
          return <ProductItem key={store.shopId} store={store} />;
        })}
      </Styled.Body>
    </Styled.Background>
  );
};

export default ProductList;
