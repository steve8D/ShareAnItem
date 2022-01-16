import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import Form from './components/Form';
import { tempItemsList } from './components/mockdata';

const App = () => {
  const [itemsList, setItemsList] = React.useState(tempItemsList);
  const [item, setItem] = React.useState({
        user: 'guest',
        itemDescription: '',
        quantity: 0,
        location: '',
        time: ''
  })

  const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setItem(state => ({ ...state, [name]:value}));
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      const newItem = {...item};
      const newList = itemsList.concat(newItem);
      setItemsList(newList);
  }

  const handleItemTaken = (id) => {
      setItemsList(currentList => currentList.filter((item) => item.id !== id));
  }

  return (
    <>
      <Router>
        <Header/>
        <Routes>
		      <Route exact path="/" element={<HomePage list={itemsList} onTaken={handleItemTaken}/>}/>
				  <Route exact path="/form" element={<Form values={item} onType={handleChange} onSumbit={handleSubmit}/>}/>
	      </Routes>
      </Router>
    </>
  );
}

export default App;
