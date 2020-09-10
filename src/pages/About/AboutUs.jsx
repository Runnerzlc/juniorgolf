import React from 'react';
import { Card } from 'react-bootstrap';
import { aboutTextArray } from '../../assets/AboutText';
import '../../styles/About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Card style={{ width: '50rem' }}>
          <Card.Body>
            {
              aboutTextArray.map((text, index) => {
                return (
                  <Card.Text key={index}>
                    {text}
                  </Card.Text>
                )
              })
            }
          </Card.Body>
        </Card>
    </div>
  );
}

export default AboutUs;
