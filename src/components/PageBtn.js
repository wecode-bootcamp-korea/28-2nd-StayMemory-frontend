import React from 'react';
import styled from 'styled-components';

export default function Buttons({ updateOffset }) {
  return (
    <PageBtn>
      <button onClick={() => updateOffset(0)}>1</button>
      <button onClick={() => updateOffset(1)}>2</button>
      <button onClick={() => updateOffset(2)}>3</button>
      <button onClick={() => updateOffset(3)}>4</button>
      <button onClick={() => updateOffset(4)}>5</button>
    </PageBtn>
  );
}

const PageBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 20px;

  button {
    all: unset;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: whitesmoke;
    color: black;
    cursor: pointer;

    &.selected {
      background-color: gray;
      color: blue;
      cursor: default;
    }
  }
`;
