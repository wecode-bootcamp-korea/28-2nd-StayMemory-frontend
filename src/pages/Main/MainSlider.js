import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function MainSlider() {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <div className="slideNum">
        <p className="currentSlideNum">1 / 10</p>
      </div>
      <div className="slideButtons" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 700px;
  background-color: skyblue;
  margin: 5% auto;
  width: 100%;

  .prev {
    position: absolute;
    width: 4.5rem;
    height: 7.5rem;
    background-color: transparent;
    border: none;
    transform: translate(8.5rem, 36.2rem);
    z-index: 2;
  }

  .next {
    position: absolute;
    width: 4.5rem;
    height: 7.5rem;
    background-color: transparent;
    border: none;
    transform: translate(13.1rem, 35.2rem);
    z-index: 2;
  }

  .arrowBack {
    font-size: 2rem;
    color: white;
    opacity: 0.6;
  }

  .arrowForward {
    font-size: 2rem;
    color: white;
    opacity: 0.6;
  }

  .slideNum {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.5rem;
    height: 7.5rem;
    opacity: 0.7;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    transform: translateY(35.2rem);
  }

  .slideButtons {
    width: 8.7rem;
    height: 7.5rem;
    opacity: 0.7;
    background-color: black;
    color: white;
    transform: translate(8.53rem, 27.7rem);
    z-index: 1;
  }
`;

export default MainSlider;
