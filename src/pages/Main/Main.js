import React, { useEffect, useState } from 'react';
import MainSlider from './MainSlider';
import SubSlider from './SubSlider/SubSlider';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Main() {
  const [mainSlide, setMainSlide] = useState([]);
  const [subSlide, setSubSlide] = useState([]);
  useEffect(() => {
    fetch('/data/mainSlider.json')
      .then(res => res.json())
      .then(res => setMainSlide([...res]));

    fetch('/data/subSlider.json')
      .then(res => res.json())
      .then(res => setSubSlide([...res]));
  }, []);

  return (
    <Wrapper>
      <MainSlider mainSlide={mainSlide} />
      {subSlide.length && <SubSlider subSlide={subSlide} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Main;
