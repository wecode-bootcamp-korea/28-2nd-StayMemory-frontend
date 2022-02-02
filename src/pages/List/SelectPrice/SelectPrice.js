import React, { useState } from 'react';
import {
  ModalPeopleBtn,
  ModalPeopleBtnWrapper,
  PeopleTitle,
  ModalBack,
  InputContainer,
  InputHeader,
  InputContent,
  Dash,
} from '../List';
import { AiOutlineClose } from 'react-icons/ai';

export default function SelectPrice({ closeHandler, handleFilter }) {
  const [value, setValue] = useState([0]);

  const convertToPriceObj = () => {
    return {
      minprice: value * 100,
      maxprice: value * 10000,
    };
  };

  const handleChange = e => {
    setValue(e.target.value);
    console.log(e.target.value);
    console.log(value);
  };

  return (
    <ModalBack>
      <PeopleTitle>
        가격 범위
        <AiOutlineClose onClick={closeHandler} />
      </PeopleTitle>
      <div>
        <input
          onChange={handleChange}
          type="range"
          id="id"
          name="maxprice"
          min="0"
          max="100"
        />
      </div>
      <InputContainer>
        <div>
          <InputHeader>최저요금</InputHeader>
          <InputContent>
            <input type="text" value={0} />
            만원
          </InputContent>
        </div>
        <Dash>-</Dash>
        <div>
          <InputHeader>최고요금</InputHeader>
          <InputContent>
            <input type="text" value={value} />
            만원~
          </InputContent>
        </div>
      </InputContainer>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn onClick={() => handleFilter(convertToPriceObj())}>
          적용하기
        </ModalPeopleBtn>
      </ModalPeopleBtnWrapper>
    </ModalBack>
  );
}
