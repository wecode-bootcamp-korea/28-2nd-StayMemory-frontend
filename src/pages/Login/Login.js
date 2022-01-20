import React from 'react';
import styled, { keyframes } from 'styled-components';
import { KAKAO_AUTH_URL } from '../../components/OAuth/Oauth';

function Login() {
  return (
    <Container>
      <div>
        <ContentAnimationBox>
          <TitleContainer>
            <EngTitle>LOGIN</EngTitle>
            <KorTitle>로그인</KorTitle>
          </TitleContainer>
        </ContentAnimationBox>

        <LoginForm>
          <LoginInput placeholder="이메일 아이디" />
          <LoginInput placeholder="비밀번호" />
          <LoginButton>LOGIN</LoginButton>

          <KakaoBtn href={KAKAO_AUTH_URL}>
            <img src="/images/kakaoBtn.png" alt="카카오 로그인 버튼" />
          </KakaoBtn>
        </LoginForm>
      </div>
    </Container>
  );
}

export default Login;

const sayHelloAnimation = keyframes`
  from {
    transform: rotate(-5deg);
  }to{
    transform: rotate(5deg);
  }
`;

const ContentAnimationBox = styled.div`
  animation: ${sayHelloAnimation} 1s linear infinite alternate;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const EngTitle = styled(Title)`
  font-size: 25px;
`;

const KorTitle = styled(Title)`
  font-size: 15px;
  color: gray;
`;

const LoginForm = styled.div`
  border-top: 1px solid black;
  margin-top: 40px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 360px;
`;

const LoginInput = styled.input`
  height: 45px;
  border: none;
  border-bottom: 1px solid gray;
`;

const LoginButton = styled.button`
  margin-top: 30px;
  width: 360px;
  height: 55px;
  background-color: black;
  color: white;
`;

const KakaoBtn = styled.a`
  margin-top: 15px;
  img {
    width: 355px;
  }
`;
