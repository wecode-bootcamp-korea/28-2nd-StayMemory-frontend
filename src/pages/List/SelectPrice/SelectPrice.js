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
import styled from 'styled-components';

// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function SelectPrice({ closeHandler, handleFilter }) {
  // const [value, setValue] = useState([0, 100]);
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
        {/* 레인지 슬라이더 2개 양쪽방향만들고 그 값을 state로 관리 - 객체 */}
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

{
  /* <Box>
          <div class="slider">
            <input
              onChange={handleChange}
              type="range"
              id="input-left"
              min="1"
              max="100"
              value={value[0]}
            />
            <input
              type="range"
              id="input-right"
              min="1"
              max="100"
              value={value[1]}
            />
            <div class="track">
              <div class="range"></div>
              <div class="thumb left"></div>
              <div class="thumb right"></div>
            </div>
          </div>
        </Box> */
}

{
  /* <input
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="secondary"
            type="range"
          /> */
}

// const Box = styled.div`
//   .slider {
//     width: 100%;
//     height: 100%;
//     padding: 2rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     position: relative;

//     input {
//       width: calc(100% - 2rem);
//       top: 3rem;
//       left: 1rem;
//       position: absolute;
//       border: none;

//       input:first-child {
//         top: 1rem;
//       }

//       .track {
//         position: relative;
//         width: 100%;
//         height: 0.5rem;
//         margin-top: 5rem;
//         background-color: #bdc3c7;
//         border-radius: 0.5rem;

//         .range {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background-color: #2c3e50;
//           border-radius: 0.5rem;
//         }

//         .thumb {
//           position: absolute;
//           top: 0;
//           transform: translateY(-0.25rem);
//           width: 1rem;
//           height: 1rem;
//           background-color: black;
//           border-radius: 50%;
//         }

//         .left {
//           left: 0;
//         }

//         .right {
//           right: 0;
//         }
//       }
//     }
//   }
// `;
