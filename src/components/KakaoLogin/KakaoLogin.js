import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function KakaoLogin() {
  const location = useLocation();
  const [accessToken, setAccessToken] = useState('');
  // const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    const authCode = location.search.slice(6);
    function getToken() {
      fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&code=${authCode}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
      })
        .then(res => res.json())
        .then(res => setAccessToken(res.access_token));
    }
    getToken();
  }, [location.search]);

  useEffect(() => {
    function sendToken() {
      fetch('10.58.3.49:8080/users/signin-kakao', {
        methods: 'POST',
        headers: {
          Authorization: accessToken,
        },
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  }, [accessToken]);

  return null;
}

export default KakaoLogin;
