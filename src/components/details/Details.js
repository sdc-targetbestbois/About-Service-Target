import React from 'react';
import Highlights from './Highlights';
import Specs from './Specs';
import Description from './Description';

const Details = ({details}) => {
  return (
    <div className='details'>
      <div className='detailContent'>
        <div className='detailTop'>
          <Highlights highlights={details.highlights}/>
          <div className='lowerDeets'>
            <Specs specs={details.specs}/>
            <Description descrip={details.description}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Details;