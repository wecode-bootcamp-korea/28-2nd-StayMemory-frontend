import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

function Location() {
  return (
    <Wrapper>
      <SearchWrapper>
        <AiOutlineSearch />
        <input
          type="text"
          name="search"
          placeholder="원하는 스테이/지역을 검색해보세요"
        />
      </SearchWrapper>
      <SearchTitle>국내</SearchTitle>
      <ButtonWrapper>
        <button>전체</button>
        <button>서울</button>
        <button>제주</button>
        <button>강원</button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  width: 40rem;
  /* background-color: orange; */
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  width: 80%;
  height: 2.5rem;
  background-color: lightgrey;
  border-radius: 1.5rem;

  & > input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
  }
`;

const SearchTitle = styled.h1`
  padding: 1rem;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 3rem 0 3rem 0;

  & > button {
    margin: 0 1rem 0 1rem;
    width: 6rem;
    height: 2rem;
    /* background: black; */
    border: none;
    border-radius: 1rem;
    /* color: white; */
  }
`;

export default Location;
