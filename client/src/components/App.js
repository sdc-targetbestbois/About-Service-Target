import React, { Component } from 'react';
import Axios from 'axios';

import Details from './details/Details';
import Shipping from './shipping/Shipping';
import QA from './qa/QA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: null,
      details: {},
      shipping: {},
      qa: {},
      tab: ''
    };

    this.tab = this.tab.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.newAnswer = this.newAnswer.bind(this);
  }

  componentDidMount() {
    this.getAbout();

    const numQ = document.getElementsByClassName('numQuestions')
    if (numQ[0]) {
      numQ[0].addEventListener('click', () => {
        this.setState({tab: 'qa-tab'})
      })
    }
    // document.addEventListener
      // on event, setState({id}, () => this.getAbout())
  }

  getAbout() {
    Axios.get(`http://about-service-env.eba-sfsa5uyc.us-east-2.elasticbeanstalk.com/item/${this.state.id}`)
      .then(about => {
        this.setState({
          id: about.data[0].id,
          name: about.data[0].name,
          details: about.data[0].details,
          shipping: about.data[0].shipping,
          qa: about.data[0].qA,
          tab: 'details-tab'
        })
      })
      .catch(err => {
        console.log('Error getting details from server');
      });
  }

  tab(e) {
    this.setState({tab: e.target.id})
  }

  newQuestion(q) {
    const body = {
      id: this.state.id,
      name: this.state.name,
      qA: {
        question: q.question,
        name: q.name
      }
    }

    Axios.put('http://about-service-env.eba-sfsa5uyc.us-east-2.elasticbeanstalk.com/question', body)
      .then(() => {
        const qas = this.state.qa;
        qas.push(q);
        this.setState({qa: qas})
      })
      .catch('Error posting question');
  }

  newAnswer(a) {
    const body = {
      id: this.state.id,
      qId: a.qId,
      answer: {
        answer: a.answer,
        name: a.name,
        helpful: 0,
        notHelpful: 0
      }
    }

    Axios.put('http://about-service-env.eba-sfsa5uyc.us-east-2.elasticbeanstalk.com/answer', body)
      .then(() => {
        let qas = this.state.qa;
        qas = qas.map(qs => {
          if (qs._id === a.qId) {
            qs.answers.push(body.answer);
          }
          return qs;
        })
        console.log(qas)
        this.setState({qa: qas});
      })
      .catch('Error adding answer');
  }

  render() {
    return (
      <div id='about'>
        <h2 className='title'>About this item</h2>
        <div className='subcomp'>
          <div className='tabs'>
            <ul className='tabList'>
              <li className={`tabHeader ${this.state.tab === 'details-tab' ? 'selectedTab' : ''}`} id='details-tab' onClick={this.tab}>Details</li>
              <li className={`tabHeader ${this.state.tab === 'shipping-tab' ? 'selectedTab' : ''}`} id='shipping-tab' onClick={this.tab}>Shipping & Returns</li>
              <li className={`tabHeader ${this.state.tab === 'qa-tab' ? 'selectedTab' : ''}`} id='qa-tab' onClick={this.tab}>Q&A ({this.state.qa.length})</li>
            </ul>
          </div>
          {this.state.tab === 'details-tab' ? <Details details={this.state.details}/> : null}
          {this.state.tab === 'shipping-tab' ? <Shipping shipping={this.state.shipping}/> : null}
          {this.state.tab === 'qa-tab' ? <QA qa={this.state.qa} new={this.newQuestion} newAns={this.newAnswer}/> : null}
        </div>
      </div>
    )
  }
}

export default App;