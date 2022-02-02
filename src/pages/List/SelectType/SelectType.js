import React, { useState } from 'react';
import {
  ModalPeopleBtn,
  ModalPeopleBtnWrapper,
  PeopleTitle,
  ModalBack,
  CheckList,
} from '../List';
import { AiOutlineClose } from 'react-icons/ai';

const TYPE_DATA = [
  { id: 1, type: '게스트하우스', name: '게스트하우스' },
  { id: 2, type: '호텔', name: '호텔' },
];

export default function SelectTheme({ closeHandler, handleFilter }) {
  const [selectedType, setSelectedType] = useState({
    게스트하우스: false,
    호텔: false,
  });

  const handleChange = e => {
    const { name } = e.target;
    setSelectedType(current => ({ ...current, [name]: !current[name] }));
  };

  const handleCheckedAll = () => {
    if (isCheckedAll) {
      setSelectedType({ 게스트하우스: false, 호텔: false });
    } else {
      setSelectedType({ 게스트하우스: true, 호텔: true });
    }
  };

  const isCheckedAll = Object.values(selectedType).every(value => value);

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
        <li>
          <label onChange={handleCheckedAll} name="all">
            <span>전체</span>
            <input
              type="checkbox"
              value="space"
              name="all"
              checked={isCheckedAll}
            />
          </label>
        </li>
        {TYPE_DATA.map((item, idx) => {
          return (
            <li key={idx}>
              <label onChange={handleChange} name={item.name}>
                <span>{item.type}</span>
                <input
                  type="checkbox"
                  value="space"
                  name={item.name}
                  checked={selectedType[item.name]}
                />
              </label>
            </li>
          );
        })}
      </CheckList>
    </ModalBack>
  );
}
// 사용자가 선택한 타입 값 관리. > 불리언 데이터 사용
