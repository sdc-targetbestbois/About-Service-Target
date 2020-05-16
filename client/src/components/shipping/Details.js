import React from 'react';

const Details = ({details}) => {
  let length = `${details.dimensions.length} inches length x `;
  let width = `${details.dimensions.width} inches width`;
  let height = details.dimensions.height ? ` x ${details.dimensions.height} inches height` : '';
  let dimensions = length + width + height;

  return (
    <div className='shipSections'>
      <h4>Shipping details</h4>
      <p>Estimated ship dimensions: {dimensions}</p>
      <p>Estimated ship weight: {details.weight} pounds</p>
    </div>
  )
}

export default Details;