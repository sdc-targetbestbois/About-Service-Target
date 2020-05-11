import React from 'react';
import Answer from './Answer';
import NewAnswer from './NewAnswer';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: false
    }

    this.newAnswer = this.newAnswer.bind(this);
  }

  newAnswer() {
    this.setState({answer: !this.state.answer});
  }

  render() {
    return (
      <div className='question'>
        <h3>Q: {this.props.q.question}</h3>
        <span>{this.props.q.name} - Date</span>
        <div className='answerContainer'>
        {this.props.q.answers ? (
          <div className='answers'>
            {this.props.q.answers.map((a, i) => {
              if (a) {
                return <Answer a={a} key={i}/>
              }
            })}
          </div>
        ) : null}
        {!this.state.answer ? (
          <div className='answerIt'>
            <button onClick={this.newAnswer}>Answer it</button>
          </div>
        ) : null}
        {this.state.answer ? <NewAnswer close={this.newAnswer} qId={this.props.q._id} newAns={this.props.newAns}/> : null}
        <div className='spacer'></div>
        </div>
    </div>
    )
  }
}

export default Question;