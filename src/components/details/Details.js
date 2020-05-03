import React from 'react';
import Highlights from './Highlights';

const Details = ({details}) => {
  return (
    <div className='details'>
      <div className='detailContent'>
        <div className='detailTop'>
          <Highlights highlights={details.highlights}/>
        </div>

      </div>
    </div>
  )
}

export default Details;