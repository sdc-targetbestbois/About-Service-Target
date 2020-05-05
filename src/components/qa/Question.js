import React from 'react';
import Answer from './Answer';

const Question = ({q}) => {
    console.log(q)
  return (
    <div className='question'>
      <h3>Q: {q.question}</h3>
      <span>{q.name} - Date</span>
      <div className='answerContainer'>
        {q.answers ? (
          <ul className='answers'>
            {q.answers.map((a, i) => {
              if (a) {
                return <Answer a={a} key={i}/>
              }
            })}
          </ul>
        ) : null}
        <div className='answerIt'>
          <button>Answer it</button>
        </div>
        <div className='spacer'></div>
      </div>
    </div>
  )
}

export default Question;