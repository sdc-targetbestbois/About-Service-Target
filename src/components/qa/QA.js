import React from 'react';
import Question from './Question';

const QA = ({qa}) => {
  return (
    <div className='qa'>
      <div className='qaContainer'>
        <div className='qaContent'>
          {qa.map((q, i) => {
            return <Question q={q} key={i}/>
          })}
        </div>
        <div className='qButtons'>
          <div>
            <button className='allQs'>See all questions ({qa.length})</button>
          </div>
          <div>
            <button className='ask'>Ask a Question</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QA;