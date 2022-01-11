import * as React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

export default function StaticDateRangePickerDemo({ title, component }) {
  return (
    <Wrapper>
      <PopUp>
        <PopUpTitle>
          <h2>{title}</h2>
          <GrClose />
        </PopUpTitle>
        <CalendarWrapper>{component}</CalendarWrapper>
        <SearchButton>
          <button>SEARCH</button>
          <BsArrowRight />
        </SearchButton>
      </PopUp>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

const PopUp = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  z-index: 5;
`;

const PopUpTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
  width: 100%;
  font-size: 1.9rem;

  & > svg {
    color: lightgrey;
  }
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.5rem;
  margin: 1.5rem 0 0.5rem 0;
  background: black;
  border: none;
  border-radius: 1.5rem;
  color: white;

  & > button {
    background: transparent;
    border: none;
    color: white;
  }
`;

const CalendarWrapper = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;
