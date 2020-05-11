import React from 'react';

const Highlight = ({highlight}) => {
  return (
    <div className='highlightBorder'>
      <li className='highlight'>{highlight}</li>
    </div>
  )
}

export default Highlight;