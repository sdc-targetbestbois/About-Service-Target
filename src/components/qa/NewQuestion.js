import React from 'react';

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      name: ''
    }
  }

  render () {
    return (
      <div className='newQuestion'>
        <div className='questionForm'>
          <h3>Your question</h3>
          <textarea className='questionField' placeholder='question'/>
          <span>at least 20 characters</span>
          <textarea className='questionName' placeholder='screen name'></textarea>
          <span>this name will be displayed with your question</span>
          <div className='endForm'></div>
        </div>
        <div className='formButtons'>
          <div className='cancelSubmit'>
            <button className='cancelQuestion'>cancel</button>
          </div>
          <div className='cancelSubmit'>
            <button className='submit'>submit question</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewQuestion;