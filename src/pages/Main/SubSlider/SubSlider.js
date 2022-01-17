import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SubSliderItem from './SubSliderItem';

function SubSlider() {
  const [subSliderList, setSubSliderList] = useState([]);
  useEffect(() => {
    function loadSubSliderList() {
      fetch('/data/subSlider.json')
        .then(res => res.json())
        .then(res => setSubSliderList([...res]));
    }
    loadSubSliderList();
    // console.log(subSliderList);
  }, []);

  function ArrowLeft(props) {
    return (
      <button {...props} className="prev">
        <IoIosArrowBack className="arrowBack" />
      </button>
    );
  }
  function ArrowRight(props) {
    return (
      <button {...props} className="next">
        <IoIosArrowForward className="arrowForward" />
      </button>
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <Wrapper>
      <h1>{subSliderList[0].title}</h1>
      <Slider {...settings}>
        {subSliderList[0].hotels.map((hotel, idx) => (
          <div className="slideContainer">
            <SubSliderItem key={idx} hotel={hotel} />
          </div>
        ))}
      </Slider>
      <div className="slideNum">
        <p className="currentSlideNum">1 / 10</p>
      </div>
      <div className="slideButtons" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 20rem;
  /* background-color: skyblue; */

  .slideContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    /* background-color: orange; */
  }
`;

export default SubSlider;
