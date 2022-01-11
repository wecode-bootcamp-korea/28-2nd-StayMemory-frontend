import React, { useState } from 'react';
import {
  ModalPeopleBtn,
  ModalPeopleBtnWrapper,
  PeopleTitle,
  ModalBack,
  CheckList,
} from '../List';
import { AiOutlineClose } from 'react-icons/ai';

export default function SelectTheme({ closeHandler, handleFilter }) {
  const TYPE_DATA = [
    { id: 1, type: '전체', name: 'all' },
    { id: 2, type: '게스트하우스', name: 'guestHouse' },
    { id: 3, type: '호텔', name: 'hotel' },
  ];

  const [selectedType, setSelectedType] = useState({
    all: true,
    guestHouse: false,
    hotel: false,
  });

  const handleCheckbox = () => {
    const arr = Object.keys(selectedType);
    arr.forEach(element => {
      if (selectedType[element] === true) {
        selectedType[element] = false;
      } else {
        selectedType[element] = true;
      }
    });

    console.log(selectedType);
  };

  return (
    <ModalBack>
      <PeopleTitle>
        스테이유형
        <AiOutlineClose onClick={closeHandler} />
      </PeopleTitle>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn onClick={() => handleFilter(selectedType)}>
          적용하기
        </ModalPeopleBtn>
      </ModalPeopleBtnWrapper>
      <CheckList>
        {TYPE_DATA &&
          TYPE_DATA.map((item, idx) => {
            return (
              <li key={idx}>
                <label onChange={handleCheckbox} name={item.name}>
                  <span>{item.type}</span>
                  <input type="checkbox" name={item.name} />
                </label>
              </li>
            );
          })}
      </CheckList>
    </ModalBack>
  );
}
// 사용자가 선택한 타입 값 관리. > 불리언 데이터 사용
