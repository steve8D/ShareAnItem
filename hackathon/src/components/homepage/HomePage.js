import react from 'react';
import Form from './Form';
import MarketListTable from './MarketListTable';

const HomePage = () => {
    const tempItemsList = [
        {user: 'Danny Ngo', itemDescription: 'mattress', quantity: 10, location: 'UNC', time: '9:00pm'}
    ]

    const itemsList = react.useState(tempItemsList);

    return (
        <div>
        <h1>Home Page</h1>
        <MarketListTable list={tempItemsList}/>
    </div>
    )
}

export default HomePage;