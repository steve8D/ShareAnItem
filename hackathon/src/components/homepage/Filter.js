import React from "react";
import { Dropdown } from "react-bootstrap";
import { tempCategoryList } from "../mockdata";

class Filter extends React.Component {

    changeCategory = (event) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(event.target.innerText);
        }
    }

    render() {
        return (
            <Dropdown className="filter-container">
                <Dropdown.Toggle variant="none" id="dropdown-basic" className="filter-button">
                    {this.props.category}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        tempCategoryList.map((category, index) => <Dropdown.Item onClick={this.changeCategory}>
                            {category}
                        </Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default Filter;