import React from 'react';
import Question from './Question';
import NewQuestion from './NewQuestion';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ask: false
    }

    this.newQuestion = this.newQuestion.bind(this);
  }

  newQuestion () {
    this.setState({ask: !this.state.ask})
  }

  render () {
    return (
      <div className='qa'>
        <div className='qaContainer'>
          <div className='qaContent'>
            {this.props.qa.length > 0 ? (
              this.props.qa.map((q, i) => {
                if (q) {
                  return <Question q={q} key={i}/>
                }
              })
            ) : null }
          </div>
          <div className='qaLower'>
            <div className='qButton'>
              <button className='allQs'>See all questions ({this.props.qa.length})</button>
            </div>
            <div className='qButton'>
              {!this.state.ask ? <button className='ask' onClick={this.newQuestion}>Ask a Question</button> : null}
            </div>
            {this.state.ask ? <NewQuestion close={this.newQuestion} new={this.props.new}/> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default QA;