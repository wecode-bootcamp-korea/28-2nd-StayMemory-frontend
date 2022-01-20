import React, { useState } from 'react';

function Likes(props) {
  const [heart, setHeart] = useState(false);
  let heartCnt = 0;
  function clickHeart() {
    setHeart(!heart);
    if (heart === true) {
      heartCnt++;
    }
    // fetch()
    fetch('http://192.168.243.37:8082/wishlists', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.AekHFMguragxj6mgkwhioYrEzr6tOktCW-vOYLj1P9M',
      },
      //   body: JSON.stringify({ stayId: 3 }),
    })
      .then(response => response.json())
      .then(response => console.log(response));
    // props.productData
  }

  return (
    <div>
      <div>
        {heart ? (
          <img src="/images/heart2.png" alt="꽉찬하트" onClick={clickHeart} />
        ) : (
          <img src="/images/heart1.png" alt="텅빈하트" onClick={clickHeart} />
        )}
      </div>
    </div>
  );
}

export default Likes;
