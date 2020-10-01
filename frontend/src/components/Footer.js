import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center pb-3'>
            Copyright &copy;Jonah Nannepaga
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
