import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { selectedLocationState } from '../GlobalState';

function Location() {
  const [selectedLocation, setSelectedLocation] = useRecoilState(
    selectedLocationState
  );

  function selectLocation(str) {
    setSelectedLocation({
      ...selectedLocation,
      location: str,
    });
  }

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
        <Button
          isClicked={selectedLocation.location === '전체'}
          onClick={() => selectLocation('전체')}
        >
          전체
        </Button>
        <Button
          isClicked={selectedLocation.location === '서울'}
          onClick={() => selectLocation('서울')}
        >
          서울
        </Button>
        <Button
          isClicked={selectedLocation.location === '제주'}
          onClick={() => selectLocation('제주')}
        >
          제주
        </Button>
        <Button
          isClicked={selectedLocation.location === '강원'}
          onClick={() => selectLocation('강원')}
        >
          강원
        </Button>
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
`;

const Button = styled.button`
  margin: 0 1rem 0 1rem;
  width: 6rem;
  height: 2rem;
  background-color: ${props => (props.isClicked ? 'black' : 'lightgrey')};
  border: none;
  border-radius: 1rem;
  color: ${props => (props.isClicked ? 'white' : 'black')};
`;

export default Location;
