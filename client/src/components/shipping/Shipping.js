import React from 'react';
import Options from './Options';
import Details from './Details';
import Return from './Return';

const Shipping = ({shipping}) => {
  return (
    <div className='shipping'>
      <div className='shipContent'>
        <Options />
        <Details details={shipping.details}/>
        <Return />
      </div>
    </div>
  )
}

export default Shipping;