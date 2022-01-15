import react from 'react';
import Form from './Form';

const HomePage = () => {
    const itemsList = [
        {user: 'Danny Ngo', itemDescription: 'mattress', quantity: 10}
    ]

    return (
        <div>
        <h1>Home Page</h1>
        <Form />
    </div>
    )
}

export default HomePage;