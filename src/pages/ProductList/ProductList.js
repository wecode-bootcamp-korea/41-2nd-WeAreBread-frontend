import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TbCurrentLocation } from 'react-icons/tb';
import { FaRegShareSquare } from 'react-icons/fa';
import ProductMap from './ProductMap';
import ProductItem from './ProductItem';
import MoveToTopBtn from '../../components/MoveToTopBtn/MoveToTopBtn';
import * as Styled from './ProductListStyles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const getShops = async (search, offset, sort = 'likes', limit = 5) => {
  const res = await fetch(
    `http://138.2.112.49:3000/shops?search=서울&offset=${offset}&limit=${limit}&sort=${sort}`
  );
  const data = await res.json();
  return data;
};

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  // shops
  const [item, setItem] = useState([]);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState('likes');
  const [hasMoreLoad, setHasMoreLoad] = useState(true);
  const pageEnd = useRef(null);

  // map
  const currentUrl = window.location.href;
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [currentLocation, setCurrentLocation] = useState();
  const [isCurrentLocationLoading, setIsCurrentLocationLoading] =
    useState(false);

  const [error, setError] = useState();

  const loadMore = () => {
    if (hasMoreLoad) {
      setOffset(prev => prev + 5);
    }
  };

  // type sortType = 'likes' | 'reviews' | 'rates'
  const changeFilter = async sortType => {
    setItem([]);
    setOffset(0); // -> offset 도 0으로 해줘야함
    setSort(sortType);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await getShops(search, offset, sort);
      // 아무것도 응답받지 못한 경우 더 이상 가져올 데이터가 없는 것으로 간주합니다.
      if (res?.list?.length === 0) {
        setHasMoreLoad(false);
      } else {
        // 처음 데이터 받아온 경우에는 응답 데이터의 첫번째 shop을 지도 중심점으로 이동합니다.
        if (item.length === 0) {
          const firstShop = res.list[0];
          const { latitude, longitude } = firstShop;
          setMapCenter({
            lat: Number(longitude),
            lng: Number(latitude),
          });
        }
        setItem(prev => [...prev, ...res.list]);
      }
    };
    loadData();
  }, [search, offset, sort]);

  console.log(mapCenter);

  useEffect(() => {
    if (pageEnd?.current) {
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

  const handleSuccess = pos => {
    const { latitude, longitude } = pos.coords;

    setCurrentLocation({
      lat: { latitude },
      lng: { longitude },
    });
    setMapCenter({
      lat: { latitude },
      lng: { longitude },
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
            <Styled.Order onClick={() => changeFilter('likes')}>
              좋아요 많은순
            </Styled.Order>
            <Styled.Order onClick={() => changeFilter('reviews')}>
              리뷰 많은순
            </Styled.Order>
            <Styled.Order onClick={() => changeFilter('rates')}>
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
            <Styled.SubTitle>서울 </Styled.SubTitle>
            <Styled.SubInfo />
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
          item={item}
          mapCenter={mapCenter}
          currentLocation={currentLocation}
          geoLocationError={error}
        />
        {item &&
          item.map(store => {
            return <ProductItem key={store.shopId} store={store} />;
          })}
      </Styled.Body>
      <div ref={pageEnd} />
      <MoveToTopBtn />
    </Styled.Background>
  );
};

export default ProductList;
