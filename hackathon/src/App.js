import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import Form from './components/Form';

const App = () => {
  return (
    <>
      {/* <Header />
      <HomePage /> */}
      <Router>
        <Header/>
        <Routes>
		      <Route exact path="/" element={<HomePage/>}/>
				  <Route exact path="/form" element={<Form/>}/>
	      </Routes>
      </Router>
    </>
  );
}

export default App;
