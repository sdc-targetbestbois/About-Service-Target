import React from 'react';

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      name: ''
    }

    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.new = this.new.bind(this);
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

  new(e) {
    e.preventDefault();
    this.props.new({
      question: this.state.question,
      name: this.state.name
    })
  }

  render () {
    return (
      <div className='newQuestion'>
        <div className='questionForm'>
          <h3>Your question</h3>
          <textarea className='questionField' placeholder='question' value={this.state.question} name='question' onChange={this.handleChange}/>
          <span>at least 20 characters</span>
          <textarea className='questionName' placeholder='screen name' value={this.state.name} name='name' onChange={this.handleChange}></textarea>
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