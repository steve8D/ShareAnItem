import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, Form } from "react-bootstrap";
import searchLogo from '../../assets/Icons/Search.svg';


/**
 * Search Bar Component for Top Header
 */
class SearchBar extends Component {

    /**
     * Handler for searching information when search bar is submitted.
     * @param {*} event The submit event
     */
    searchForItem(event) {
        event.preventDefault();
        let searchText = event.target.searchText.value;
        if (searchText.length > 0) {
            alert("Searching for: " + searchText);
        }

    }

    render() {
        return (
            <Form onSubmit={this.searchForItem}>
                <FormControl className="search-bar"
                    name="searchText"
                    placeholder="Search"
                    type="text"
                />
            </Form>
        );
    }
}

export default SearchBar;