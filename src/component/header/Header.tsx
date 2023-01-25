import React, { ChangeEvent } from "react";
import { Col, Container, Input, Nav, NavItem, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

interface Props {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
}

const Header = (props: Props) => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col>
            <Nav>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">About us</Link>
              </NavItem>
              <NavItem>
                <Link to="/sign">Sign up/ Sign in</Link>
              </NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav className="search">
              <NavItem>
                <Input
                  type="text"
                  placeholder="Search here"
                  onChange={props.onChangeHandler}
                  value={props.searchValue}
                />
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
