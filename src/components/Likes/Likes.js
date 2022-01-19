import React, { useState } from 'react';

function Likes(props) {
  const [heart, setHeart] = useState(false);

  function clickHeart() {
    setHeart(!heart);
    // fetch()
    fetch('http://wishlists', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.AekHFMguragxj6mgkwhioYrEzr6tOktCW-vOYLj1P9M',
      },
      body: JSON.stringify({ stayId: props.stayId }),
    })
      .then(response => response.json())
      .then(response => {});
    // props.productData
  }

  return (
    <div>
      <div>
        {heart ? (
          <img src="/images/heart2.png" alt="찬하트" onClick={clickHeart} />
        ) : (
          <img src="/images/heart1.png" alt="빈하트" onClick={clickHeart} />
        )}
      </div>
    </div>
  );
}

export default Likes;
