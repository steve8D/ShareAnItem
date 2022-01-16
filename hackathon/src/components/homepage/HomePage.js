import React from 'react';
import MarketListTable from './MarketListingsTable';
import '../../css/index.css';
import { tempItemsList } from '../mockdata';
// import Form from './Form';

/**
 * Builds the homepage of the app.
 * @returns Homepage component
 */
const HomePage = () => {

    const [itemsList, setItemsList] = React.useState(tempItemsList);
    const item = {};

    // Handle form submit (for removing item from current view & adding to user's list)
    const handleItemTaken = (id) => {
        setItemsList(currentList => currentList.filter((item) => item.id !== id));
    }

    const handleChange = (event) => {

    }

    return (
        <div className="homepage">
            <h3 className='sectionTitle'>Today's picks</h3>
            {/* <Form value={item} onType={handleChange} /> */}
            <MarketListTable items={itemsList} onTaken={handleItemTaken} />
        </div>
    )
}

export default HomePage;