import React, { useState, useEffect } from 'react';
import { Card, Container, Image, Spinner } from 'react-bootstrap';
import { aboutTextArray } from '../../assets/AboutText';
import { storage } from '../../firebase';
import '../../styles/About.css';

const AboutUs = () => {
  const [imageUrl, setImageUrl] = useState("");
  const storageRef = storage.ref();

  const getImageUrl = async () => {
    const imageRef = await storageRef.child('about').listAll();
    const imageName = imageRef.items[0].location.path;
    const url = await storageRef.child(imageName).getDownloadURL();
    setImageUrl(url);
  }

  useEffect(() => {
    getImageUrl();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="about-us">
      <Container>
        <Card className="about-card">
          <Card.Body>
            {
              aboutTextArray.map((item, index) => {
                if (item.isTitle) {
                  return (
                    <h3>
                      {item.text}
                    </h3>
                  )
                } else {
                  return (
                    <Card.Text key={index}>
                      {item.text}
                    </Card.Text>
                  )
                }
              })
            }
            {
              imageUrl ?
              <Image
                src={imageUrl}
                width="100%"
                className="about-image" 
              /> :
              <div className="about-spinner">
                <Spinner animation="border" role="status" >
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            }
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default AboutUs;
