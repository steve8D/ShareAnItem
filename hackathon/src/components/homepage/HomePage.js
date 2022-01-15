import react from 'react';
import Form from './Form';
import MarketListTable from './MarketListTable';

// 
const tempUsername = `steve8D`;

const HomePage = () => {
    
    const tempItemsList = [
        {user: 'steve8D', itemDescription: 'mattress', quantity: 10, location: 'UNC', time: '9:00pm'},
        {user: 'JV', itemDescription: 'potato', quantity: 2, location: 'Bus Loop', time: '9:00am'},
        {user: 'Jill', itemDescription: 'kettle', quantity: 1, location: 'Lower Cascade', time: '3:00pm'},
        {user: 'agentpee', itemDescription: 'mini-fridge', quantity: 1, location: 'AMS Nest', time: '12:00pm'}
    ]

    const [itemsList, setItemsList] = react.useState(tempItemsList);
    const [item, setItem] = react.useState({
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
        const newList = [...itemsList, item];
        setItemsList(newList);
    }

    return (
        <div>
        <h1>Welcome {tempUsername}</h1>
        <Form values={item} onType={handleChange} onSumbit={handleSubmit}/>

        <br/>
        <MarketListTable list={itemsList}/>
    </div>
    )
}

export default HomePage;