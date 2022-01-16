import React, {Component} from 'react';
import './App.css';
import ItemDescription from './components/ItemDescription';

class App extends Component{
  render(){
    return (
      <div className='react'>
        <ItemDescription />
      </div>
    )
  }
}

export default App;
