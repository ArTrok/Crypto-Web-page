import React from 'react';
import lirikMe from '../images/meLirik.png';

function WaterMark() {
  return (
    <div>
      Made By
      <img alt="boy pointing to himself" src={lirikMe} />
    </div>
  );
}

export default WaterMark;
