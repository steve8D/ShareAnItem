import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import '../../css/header.css';
import Home from '../../assets/Icons/Home.svg';
import NewPosts from '../../assets/Icons/NewPosts.svg';
import Messenger from '../../assets/Icons/Messenger.svg';
import Like from '../../assets/Icons/Like.svg';

class HeaderIconList extends Component {
    render() {
        return (
            <Row>
                <Col lg="8" sm="4" md="8" xs="4"></Col>
                <Col lg="1" sm="2" md="1" xs="2">
                    <FunctionalIcon icon={Home} path="/" />
                </Col>
                <Col lg="1" sm="2" md="1" xs="2">
                    <FunctionalIcon icon={Messenger} />
                </Col>
                <Col lg="1" sm="2" md="1" xs="2">
                    <FunctionalIcon icon={NewPosts} />
                </Col>
                <Col lg="1" sm="2" md="1" xs="2">
                    <FunctionalIcon icon={Like} />
                </Col>
            </Row>
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

export default HeaderIconList;