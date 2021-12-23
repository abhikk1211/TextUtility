import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//rt logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <>
      <Navbar title="TextUtils"></Navbar>

      <TextForm heading='Enter the text to analyze below'/>
    </>

    );
  }
}

export default App;
