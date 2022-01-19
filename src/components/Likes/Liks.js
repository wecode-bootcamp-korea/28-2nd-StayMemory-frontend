import React, { useState } from 'react';

function Liks() {
  const [heart, setHeart] = useState(true);

  function clickHeart() {
    setHeart(!heart);
  }

  return (
    <div>
      <div>
        {heart ? (
          <img src="/images/heart1.png" alt="빈하트" onClick={clickHeart} />
        ) : (
          <img src="/images/heart2.png" alt="찬하트" onClick={clickHeart} />
        )}
      </div>
    </div>
  );
}

export default Liks;
