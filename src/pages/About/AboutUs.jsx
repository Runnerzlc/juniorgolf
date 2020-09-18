import React, { useState, useEffect } from 'react';
import { Card, Container, Image, Spinner } from 'react-bootstrap';
import { aboutTextArray } from '../../assets/AboutText';
import { storage } from '../../firebase';
import '../../styles/About.css';

const AboutUs = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const storageRef = storage.ref();

  const getImageUrl = async () => {
    const imageRefs = await storageRef.child('about').listAll();
    const imageNames = imageRefs.items.map(item => item.location.path);
    const urlPromises = imageNames.map(name => {
      return storageRef.child(name).getDownloadURL();
    });
    Promise.all(urlPromises).then(values => {
      setImageUrls(values);
    });
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
              imageUrls.length > 0 ?
              <div>
              {
                imageUrls.map((imageUrl, index) => {
                  return (
                    <Image
                      key={index}
                      src={imageUrl}
                      width="100%"
                      className="about-image" 
                    /> 
                  )
                })
              }
              </div> :
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
