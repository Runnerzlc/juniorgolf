import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import FooterImage from '../../assets/Home_Golf.png';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <Container className="fluid footer-container">
          <Row>
            <Col className="footer-title">Contact Information</Col>
          </Row>
          <Row>
            <Col>Email: m.chang1227@gmail.com</Col>
          </Row>
          <Row>
            <Col>Phone: 206-566-9216</Col>
          </Row>
          <Row>
            <Col>Web：juniorgolf4fun.org</Col>
          </Row>
        </Container>
        <Image
          src={FooterImage} 
          className="footer-image"
          width="250"
          height="200"
        />
      </div>
      <div className="copyright">
        Copyright © 2002-2017 Juniorgolf4fun.org
      </div>
    </footer>
  );
}

export default Footer;
