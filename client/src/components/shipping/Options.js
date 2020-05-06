import React from 'react';

const Options = (props) => {
  const today = new Date();
  let getBy = new Date(today);
  getBy.setDate(getBy.getDate() + 2);
  getBy = getBy.toString().split(' ').slice(0, 3);
  getBy[2] = getBy[2][0] === '0' ? getBy[2].slice(1) : getBy[2];
  getBy = `${getBy[0]}, ${getBy[1]} ${getBy[2]}`;

  return (
    <div className='shipSections'>
      <h4>Shipping options</h4>
      <p><span className='getBy'>Get it by {getBy}</span> with free 2-day shipping</p>
    </div>
  )
}

export default Options;