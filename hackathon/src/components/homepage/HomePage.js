import React from 'react';
import '../../css/index.css';
import { Row, Col } from 'react-bootstrap';
import Filter from './Filter';
import MarketListTable from './MarketListingsTable';

/**
 * Builds the homepage of the app.
 * @returns Homepage component
 */
const HomePage = ({list, onTaken}) => {
    const [filters, setFilters] = React.useState({
        category: "All",
    });

    const filterListBasedOnCategory = (category, list) => {
        if (category === "All") {
            return list;
        } else {
            return list.filter((item) => item.category === category);
        }
    };

    const changeFilter = (category) => {
        setFilters((prevState) => ({ ...prevState, category: category }));
    }

    return (
        <div className="homepage">
            <Row className='sectionTitle'>
                <Col xs sm md lg>
                    <h3>Today's picks</h3>
                </Col>
                <Col xs sm="1" md="1" lg="1">
                    <Filter className="filter-button" onChange={changeFilter} category={filters.category}></Filter>
                </Col>
            </Row>
            <MarketListTable items={filterListBasedOnCategory(filters.category, list)} onTaken={onTaken} />
        </div>
    )
}

export default HomePage;