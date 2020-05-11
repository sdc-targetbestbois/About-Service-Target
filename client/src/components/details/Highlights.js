import React from 'react';
import Highlight from './Highlight';

const Highlights = ({highlights}) => {
  return (
    <div className='highlights'>
      <h3 className='highlightsHeader'>Highlights</h3>
      <ul className='highlightList'>
        {highlights.map((highlight, i) => {
          return <Highlight highlight={highlight} key={i}/>
        })}
      </ul>
    </div>
  )
}

export default Highlights;