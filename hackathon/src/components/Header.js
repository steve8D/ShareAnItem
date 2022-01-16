import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import HeaderAppLogo from "./header/HeaderAppLogo";
import Home from '../assets/Icons/Home.svg';
import '../css/header.css';

/**
 * Top header for functional icons and search bar.
 */
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Row xs="auto">
                    <Col>
                        <FunctionalIcon icon={Home} path="/"/>
                    </Col>
                    <Col>
                        <HeaderAppLogo />
                    </Col>
                </Row>
            </div>
        );
    }
}

class FunctionalIcon extends Component {
    render() {
        let iconSrc = this.props.icon;
        let path = this.props.path;
        return (
            <a href={path | "#"}>
                <img src={iconSrc}></img>
            </a>
        );
    };
}

export default Header;