import React, { useState, useEffect } from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { messageTextArray } from '../../assets/MessageText';
import { storage } from '../../firebase';
import '../../styles/Message.css';

const Message = () => {
  const [imageUrl, setImageUrl] = useState("");
  const storageRef = storage.ref();

  const getImageUrl = async () => {
    const imageRef = await storageRef.child('founder').listAll();
    const imageName = imageRef.items[0].location.path;
    const url = await storageRef.child(imageName).getDownloadURL();
    setImageUrl(url);
  }

  useEffect(() => {
    getImageUrl();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="message">
      <Container>
        <Card className="message-card">
          <Card.Body>
            {
              messageTextArray.map((text, index) => {
                return (
                  <Card.Text key={index}>
                    {text}
                  </Card.Text>
                )
              })
            }
            {
              <Image
                src={imageUrl}
                width="100%"
              /> 
            }
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Message;
