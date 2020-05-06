import React from 'react';

const Answer = ({a}) => {
  return (
    <div className='answer'>
      <span><b>A: </b>{a.answer}</span>
      <div>
        {a.name} - Date
        <a href='#' className='helpful'>Helpful ({a.helpful})</a>
        <a href='#' className='helpful'>Not helpful ({a.notHelpful})</a>
      </div>
    </div>
  )
}

export default Answer;