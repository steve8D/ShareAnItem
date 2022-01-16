import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Row xs="auto">
                    <Col>
                        <a className="app-name" href="/">Home</a>
                    </Col>
                    <Col>
                        <a className="app-name" href="/">My Orders</a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;