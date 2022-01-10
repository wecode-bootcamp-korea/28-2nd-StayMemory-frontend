import React from 'react';
import styled, { keyframes } from 'styled-components';

function Login() {
  return (
    <div className="TitleWrap">
      <div>Login</div>
      <div>로그인</div>
    </div>
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
