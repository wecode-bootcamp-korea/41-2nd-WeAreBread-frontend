import { useNavigate } from 'react-router-dom';
import {
  REST_API_KEY,
  REDIRECT_URI,
  KAKAO_TOKEN_URL,
  KAKAO_ME,
} from './KakaoConfig';
import { API } from '../config';

const KakaoRequest = () => {
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(document.location).searchParams.get('code');

  fetch(KAKAO_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
  })
    .then(res => res.json())
    .then(data => {
      fetch(API.kakaoLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: data.access_token,
        },
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('userNickname', data.userNickname);

          navigate('/');
          window.opener.location.reload();
          window.close();
        });
      /** 카카오토큰 => 카카오서버 */
      // fetch(KAKAO_ME, {
      //   headers: {
      //     authorization: `Bearer ${data.access_token}`,
      //     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      //   },
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     navigate('/');
      //     window.opener.location.reload();
      //     window.close();
      //   });
    });
};

export default KakaoRequest;
