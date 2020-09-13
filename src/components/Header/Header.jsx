import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../styles/Header.css';
import {ReactComponent as Reactmail} from "../../assets/mail.svg";
import {ReactComponent as Reactphone} from "../../assets/phone.svg";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" className="navi">
        <Navbar.Text className="text-light offset-lg-2 text-sec">Welcome to www.juniorgolf4fun.org</Navbar.Text>
        <Nav className="offset-lg-4">
          <Navbar.Text>
            <Reactphone className="header-icon"/>
            <a href="tel: 206-566-9216" className="text-primary header-contact" > 206-566-9216 </a>
          </Navbar.Text>
          <Navbar.Text >
            <Reactmail className="header-icon"/>
            <a href="mailto:m.chang1227@gmail.com" className="text-primary header-contact" > m.chang1227@gmail.coms</a>
          </Navbar.Text>
        </Nav>

      </Navbar>
    </div>
  );
}

export default Header;
