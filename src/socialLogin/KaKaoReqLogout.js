import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoReqLogout = () => {
  const navigate = useNavigate();
  localStorage.removeItem('accessToken');
  useEffect(() => {
    navigate('/');
    window.opener.location.reload();
    window.close();
  }, []);
};

export default KakaoReqLogout;
