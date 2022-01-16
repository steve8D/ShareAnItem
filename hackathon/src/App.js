import React, {Component} from 'react';
import './App.css';
import ItemDescription from './components/ItemDescription';

class App extends Component{
  state = {
    items:[
      {
        name: 'Potato',
        imgLink:'./potato.png',
        desc:"I have this spare potato",
        quantity: 2,
        time: '10:00',
        loc: 'Cafe'
      },
      {
        name: 'Carrot',
        imgLink:'./potato.png',
        desc:'I have this spare potato',
        quantity: 2,
        time: '10:00',
        loc: 'Cafe'
      },
      {
        name: 'Cabbage',
        imgLink:'./potato.png',
        desc:'I have this spare potato',
        quantity: 2,
        time: '10:00',
        loc: 'Cafe'
      },
      {
        name: 'Cucumber',
        imgLink:'./potato.png',
        desc:'I have this spare potato',
        quantity: 2,
        time: '10:00',
        loc: 'Cafe'
      }
    ]
  }
  render(){
    const {items} = this.state;
    return (
      <div className='react'>
        <ItemDescription items = {items} removeItem = {this.removeItem}/>
      </div>
    )
  }

  removeItem = (idx)=>{
    const {items} = this.state;
    this.setState({
      items: items.filter((item, index) => index !== idx)
    })
  }
}

export default App;
