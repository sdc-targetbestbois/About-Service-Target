import React from 'react';

const Description = ({descrip}) => {
  return (
    <div className='description'>
      <h3 className='descripHeader'>Description</h3>
      <p className='decripBody'>{descrip}</p>
    </div>
  )
}

export default Description;