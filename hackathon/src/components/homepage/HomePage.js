import react from 'react';
import Form from './Form';
import MarketListTable from './MarketListingsTable';

const tempUsername = `steve8D`;
let i = 4;
const HomePage = () => {
    const tempItemsList = [
        {id: 0, user: 'steve8D', itemDescription: 'mattress', quantity: 10, location: 'UNC', time: '9:00pm'},
        {id: 1, user: 'JV', itemDescription: 'potato', quantity: 2, location: 'Bus Loop', time: '9:00am'},
        {id: 2, user: 'Jill', itemDescription: 'kettle', quantity: 1, location: 'Lower Cascade', time: '3:00pm'},
        {id: 3, user: 'agentpee', itemDescription: 'mini-fridge', quantity: 1, location: 'AMS Nest', time: '12:00pm'}
    ]

    const [itemsList, setItemsList] = react.useState(tempItemsList);
    const [item, setItem] = react.useState({
        item: i,
        user: tempUsername,
        itemDescription: '',
        quantity: 0,
        location: '',
        time: ''
    })


    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value);
        setItem(state => ({ ...state, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // modify the new item with id
        const newItem = {...item, id:i++};
        const newList = [...itemsList, newItem];
        setItemsList(newList);
    }

    const handleRemove = (id) => {
        const newList = itemsList.filter((item) => item.id !== id);
        setItemsList(newList);
    }

    return (
        <div className="homepage">
        <h1>Welcome {tempUsername}</h1>
        <Form values={item} onType={handleChange} onSumbit={handleSubmit}/>

        <br/>
        <MarketListTable list={itemsList} removeItem={handleRemove}/>
    </div>
    )
}

export default HomePage;