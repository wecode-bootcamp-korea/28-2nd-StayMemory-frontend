import React, { useState } from 'react';
import styled from 'styled-components';
import { HiUser, HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

function Nav() {
  const isLoggedIn = sessionStorage.getItem('access_token');
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <Wrapper>
      <Logo className="logo">
        <img src="/images/logo.png" alt="logo" />
      </Logo>
      <FilterWrap>
        <span className="location">
          <HiOutlineLocationMarker />
          <p>어디로 떠날까요?</p>
        </span>
        <span className="date">
          <AiOutlineCalendar />
          <p>언제 떠날까요?</p>
        </span>
      </FilterWrap>
      <MenuWrap>
        <span>FIND STAY</span>
        <span>PROMOTION</span>
        <span>JOURNAL</span>
        <span>PRE-ORDER</span>
      </MenuWrap>
      <UserWrap>
        {isLoggedIn && <HiUser />}
        <button className="login">{isLoggedIn ? 'LOGOUT' : 'LOGIN'}</button>
        {isDarkMode ? (
          <BsToggleOff onClick={handleDarkMode} />
        ) : (
          <BsToggleOn onClick={handleDarkMode} />
        )}
      </UserWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80rem;
  height: 5rem;
  padding: 0 3rem 0 3rem;
  border-bottom: 1px solid lightgrey;
  font-size: 0.9rem;
`;

const Logo = styled.div`
  & > img {
    width: 6rem;
  }
`;

const FilterWrap = styled.div`
  display: flex;

  & > span {
    display: flex;
    align-items: center;
    padding: 0 1.3rem 0 1.3rem;
  }

  & > span:nth-child(2) {
    border-left: 1px solid lightgrey;
  }

  & > span > svg {
    margin-right: 0.3rem;
    font-size: 1.5rem;
  }
`;

const MenuWrap = styled.span`
  display: flex;
  justify-content: space-around;

  & > span {
    padding: 0 0.5rem 0 0.5rem;
    font-weight: 600;
  }
`;

const UserWrap = styled.span`
  display: flex;
  align-items: center;
  padding-left: 2.6rem;
  border-left: 1px solid lightgrey;

  & > button {
    background-color: transparent;
    border: none;
    font-weight: 600;
    /* font-size: 1.2rem; */
  }

  & > svg {
    margin-left: 0.4rem;
    font-size: 1.5rem;
  }
`;

export default Nav;
