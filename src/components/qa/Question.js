import React from 'react';
import Answer from './Answer';

const Question = ({q}) => {
  return (
    <div className='question'>
      <h3>Q: {q.question}</h3>
      <span>{q.name} - Date</span>
      <div className='answerContainer'>
        <ul className='answers'>
          {q.answers.map((a, i) => {
            return <Answer a={a} key={i}/>
          })}
        </ul>
        <div className='answerIt'>
          <button>Answer it</button>
        </div>
        <div className='spacer'></div>
      </div>
    </div>
  )
}

export default Question;