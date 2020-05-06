import React from 'react';

class NewAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      aMinLength: undefined,
      name: '',
      nMin: undefined
    }
  
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.new = this.new.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }
  
  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }
  
  close() {
    this.setState({
      answer: '',
      name: ''
    }, () => this.props.close());
  }
  
  checkInput(e) {
    e.preventDefault();
  
    e.target.name === 'answer' ? this.setState({aMinLength: this.state.answer.length >= 20}) : this.setState({nMin: this.state.name.length > 0});
  }
  
  new(e) {
    e.preventDefault();
  
    if (!this.state.aMinLength || !this.state.nMin) {
      return;
    }
    
    this.props.newAns({
      answer: this.state.answer,
      name: this.state.name,
      qId: this.props.qId
    })
    this.setState({
      answer: '',
      aMinLength: false,
      name: '',
      nMin: false
    })
  }
  
  render () {
    return (
      <div className='newQuestion'>
        <div className='questionForm'>
          <h3>your answer</h3>
          <textarea className='questionField' placeholder='answer' value={this.state.answer} name='answer' onChange={this.handleChange} onBlur={this.checkInput}/>
          {this.state.aMinLength === false ? <span id='minLength'>Answers must be at least 20 characters long</span> : null}
          <span>at least 20 characters</span>
          <textarea className='questionName' placeholder='screen name' value={this.state.name} name='name' onChange={this.handleChange} onBlur={this.checkInput}></textarea>
          {this.state.nMin === false ? <span id='minLength'>Please enter a screen name</span> : null}
          <span>this name will be displayed with your answer</span>
          <div className='endForm'></div>
        </div>
        <div className='formButtons'>
          <div className='cancelSubmit'>
            <button className='cancelQuestion' onClick={this.close}>cancel</button>
          </div>
          <div className='cancelSubmit'>
            <button className='submit' onClick={this.new}>submit answer</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewAnswer;