import React from 'react';

const Details = ({details}) => {
  return (
    <div className='shipSections'>
      <h4>Shipping details</h4>
      <p>Estimated ship dimensions: {details.dimensions.length} inches length x {details.dimensions.width} inches width x {details.dimensions.height} inches height</p>
      <p>Estimated ship weight: {details.weight} pounds</p>
    </div>
  )
}

export default Details;