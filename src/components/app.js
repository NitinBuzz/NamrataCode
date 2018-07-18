import React, { Component } from 'react';
import Flexi from './flexi';

const flexiConfig = {
  items: [
    {
      name: 'personname',
      label: "Person's Name",
      type: 'TextField'
    },
    {
      name: 'states',
      label: "Person's state",
      type: 'DropDown',
      values: ['Maharashtra', 'Kerala', 'Tamil Nadu']
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      state1: ''
    };
    // This binding is necessary to make `this` work in the callback
    this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
  }
  onFlexiSubmit(e, values) {
    e.preventDefault();
    console.log(`----------Flexi Submitted. ${JSON.stringify(values)}`);
  }

  render() {
    return <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} />;
  }
}

export default App;
