import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HomePage />
      </>
    );
  }
}

export default App;
