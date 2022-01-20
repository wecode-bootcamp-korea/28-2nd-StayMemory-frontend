import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { useLocation, useSearchParams } from 'react-router-dom';

function Admin() {
  const [hotelList, setHotelList] = useState([]);
  const [price, setPrice] = useState(0);
  const reader = new FileReader();
  const location = useLocation();
  const adminId = location.pathname.slice(-1);

  useEffect(() => {
    loadAdminData();
  }, []);

  function loadAdminData() {
    fetch(`/data/admin${adminId}.json`)
      .then(res => res.json())
      .then(res => setHotelList(res));
  }

  async function submitImage(e, hotelId) {
    const uploadedFile = e.target.files[0];
    reader.readAsDataURL(uploadedFile);
    reader.onload = function (e) {
      const encodedImg = e.target.result;
      // await fetch(`url/admins/${adminId}/?stay_id=${hotelId}`, {
      //   method: 'POST',
      //   headers: {
      //     //
      //   },
      //   body: {
      //     image: encodedImg,
      //   },
      // })
      //reLoadHotelList();
    };
  }

  function updatePrice(e, id) {
    const val = e.target.value;
    setPrice(val);
  }

  async function submitPrice(hotelId) {
    // await fetch(`url/admins/${adminId}/?stay_id=${hotelId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     //
    //   },
    //   body: {
    //     price: price,
    //   },
    // });
    //reLoadHotelList();
  }

  async function deleteHotel(hotelId) {
    // await fetch(`url/admins/${adminId}/?stay_id=${hotelId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     //
    //   },
    //   body: {
    //     hotelId: hotelId,
    //   },
    // });
    //reLoadHotelList();
  }

  function reLoadHotelList() {
    // fetch(`url/admins/${adminId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     //
    //   },
    //   body: {
    //   },
    // });
  }

  return (
    <Wrapper>
      <HotelList>
        <ListTitle>Hotel List</ListTitle>
        {hotelList.map((hotel, idx) => (
          <HotelItem key={idx}>
            <Name>{hotel.name}</Name>
            <ImgContainer>
              <img src={hotel.img} alt={hotel.name} />
              <UploadButton>
                <input
                  type="file"
                  src=""
                  alt="change_img"
                  accept="image/*"
                  onChange={e => submitImage(e, hotel.id)}
                />
              </UploadButton>
            </ImgContainer>
            <TextContainer>
              <Price>{`가격: ${hotel.price}`}</Price>
              <PriceInputWrapper>
                <PriceInput
                  onChange={e => updatePrice(e, hotel.id)}
                ></PriceInput>
                <PriceButton onClick={() => submitPrice(hotel.id)}>
                  변경
                </PriceButton>
              </PriceInputWrapper>
            </TextContainer>
            <CloseButton>
              <GrClose />
            </CloseButton>
          </HotelItem>
        ))}
      </HotelList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HotelList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50rem;
`;

const ListTitle = styled.h1`
  font-size: 2rem;
  margin: 2rem 0 2rem 0;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;

const HotelItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: flex;
  align-items: center;

  & > img {
    margin-right: 1rem;
    width: 6rem;
  }
`;

const UploadButton = styled.div`
  //
`;

const TextContainer = styled.div`
  //
`;

const Name = styled.h3`
  //
`;

const Price = styled.p``;

const PriceInputWrapper = styled.span``;

const PriceInput = styled.input``;

const PriceButton = styled.button``;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default Admin;
