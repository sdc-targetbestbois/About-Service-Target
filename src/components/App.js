import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      details: {},
      shipping: {},
      qa: {}
    };
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
          qa: about.data[0].qA
        })
      })
      .catch(err => {
        console.log('Error getting details from server');
      });
  }

  render() {
    return (
      <div id='about'>
        <h2 class='title'>About this item</h2>
      </div>
    )
  }
}

export default App;