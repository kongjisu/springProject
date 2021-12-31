import React from 'react';

function Rating({ rate }) {
  let star = [];
  for (let i = 0; i < rate; i++) {
    star.push(
      <li>
        <i className='las la-star'></i>
      </li>
    );
  }

  return <ul className='rating'>{star}</ul>;
}

export default Rating;
