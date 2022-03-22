import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import defaultImageURI from "./assets/images/potato.png";
import { tempItemsList } from "./components/mockdata";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Form from "./components/Form";

let i = 4;
const App = () => {
  const [itemsList, setItemsList] = React.useState(tempItemsList);
  const [item, setItem] = React.useState({
    id: i,
    user: "guest",
    itemDescription: "",
    quantity: 0,
    location: "",
    time: "",
    imgLink: defaultImageURI,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setItem((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { ...item, id: i++ };
    const newList = itemsList.concat(newItem);
    setItemsList(newList);
    console.log(itemsList);
  };

  const handleItemTaken = (id) => {
    setItemsList((currentList) => currentList.filter((item) => item.id !== id));
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage list={itemsList} onTaken={handleItemTaken} />}
          />
          <Route
            exact
            path="/form"
            element={
              <Form
                values={item}
                onType={handleChange}
                onSumbit={handleSubmit}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
