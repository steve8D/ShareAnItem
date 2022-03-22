import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import HeaderIconList from "./HeaderIconList";
import HeaderAppLogo from "./HeaderAppLogo";
import "../../css/header.css";

/**
 * Top header for functional icons and search bar.
 */
const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col lg="4" md="4" sm="4" xs="4">
          <HeaderAppLogo />
        </Col>
        <Col lg="3" md="3" sm="4" xs="1">
          <SearchBar />
        </Col>
        <Col lg="5" md="5" sm="4" xs="7">
          <HeaderIconList />
        </Col>
      </Row>
    </div>
  );
};
export default Header;
