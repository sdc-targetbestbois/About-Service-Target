import React, { Component } from 'react';
import Axios from 'axios';

import Details from './details/Details';
import Shipping from './shipping/Shipping';
import QA from './qa/QA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      details: {},
      shipping: {},
      qa: {},
      tab: ''
    };

    this.tab = this.tab.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
  }

  componentDidMount() {
    this.getAbout(1);
  }

  getAbout(id) {
    Axios.get(`/item/${id}`)
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

    Axios.put('/item', body)
      .then(() => {
        const qas = this.state.qa;
        qas.push(q);
        this.setState({qa: qas})
      })
      .catch('Error posting question');
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
          {this.state.tab === 'qa-tab' ? <QA qa={this.state.qa} new={this.newQuestion}/> : null}
        </div>
      </div>
    )
  }
}

export default App;