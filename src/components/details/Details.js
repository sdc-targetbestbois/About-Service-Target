import React from 'react';
import Highlights from './Highlights';
import Specs from './Specs';

const Details = ({details}) => {
  return (
    <div className='details'>
      <div className='detailContent'>
        <div className='detailTop'>
          <Highlights highlights={details.highlights}/>
          <div className='lowerDeets'>
            <Specs specs={details.specs}/>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Details;