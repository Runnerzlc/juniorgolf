import React from "react";
import { Navbar } from 'react-bootstrap';

const style = {
  display: 'flex',
  "flex-direction": 'column'
}
const Footer = () => {
  return (
    <div>
      <Navbar bg="secondary" style={style}>
        <Navbar.Text>Contact Information</Navbar.Text>
        <Navbar.Text>Copyright © 2002-2017 Juniorgolf4fun.org</Navbar.Text>
      </Navbar>
    </div>
  );
}

export default Footer;