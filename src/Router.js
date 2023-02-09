import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import RandomImg from './pages/RandomImg/RandomImg';
import KakaoRequest from './socialLogin/KakaoRequest';
import KakaoReqLogout from './socialLogin/KaKaoReqLogout';

const NavFooterWrapper = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/oauth/kakao" element={<KakaoRequest />} />
        <Route path="/oauth/kakao/logout" element={<KakaoReqLogout />} />
        <Route path="/random" element={<RandomImg />} />
        <Route element={<NavFooterWrapper />}>
          <Route path="/" element={<Main />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/productList" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
