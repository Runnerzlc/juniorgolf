import React from 'react';
import { Navbar, NavDropdown, Nav, Image } from 'react-bootstrap';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Text className="text-light">Welcome to www.juniorgolf4fun.org</Navbar.Text>
        <Navbar.Text className="text-primary">Michael Chang : 206-566-9216</Navbar.Text>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Image src={Logo} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;