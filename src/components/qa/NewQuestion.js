import React from 'react';

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      qMinLength: undefined,
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
      question: '',
      name: ''
    }, () => this.props.close());
  }

  checkInput(e) {
    e.preventDefault();

    e.target.name === 'question' ? this.setState({qMinLength: this.state.question.length >= 20}) : this.setState({nMin: this.state.name.length > 0});
  }

  new(e) {
    e.preventDefault();

    if (!this.state.qMinLength || !this.state.nMin) {
      return;
    }

    this.props.new({
        question: this.state.question,
        name: this.state.name
    })
    this.setState({
        question: '',
        qMinLength: false,
        name: '',
        nMin: false
    })
  }

  render () {
    return (
      <div className='newQuestion'>
        <div className='questionForm'>
          <h3>Your question</h3>
          <textarea className='questionField' placeholder='question' value={this.state.question} name='question' onChange={this.handleChange} onBlur={this.checkInput}/>
          {this.state.qMinLength === false ? <span id='minLength'>Questions must be at least 20 characters long</span> : null}
          <span>at least 20 characters</span>
          <textarea className='questionName' placeholder='screen name' value={this.state.name} name='name' onChange={this.handleChange} onBlur={this.checkInput}></textarea>
          {this.state.nMin === false ? <span id='minLength'>Please enter a screen name</span> : null}
          <span>this name will be displayed with your question</span>
          <div className='endForm'></div>
        </div>
        <div className='formButtons'>
          <div className='cancelSubmit'>
            <button className='cancelQuestion' onClick={this.close}>cancel</button>
          </div>
          <div className='cancelSubmit'>
            <button className='submit' onClick={this.new}>submit question</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewQuestion;