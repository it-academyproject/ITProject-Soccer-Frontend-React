import React from 'react';

import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import './landing.css';

function Landing() {
    return (
      <div className="landing">
        <Container>
            <Row style={{width: '100%'}}>
                <Col xs={12} md={6}>
                </Col>
                <Col xs={12} md={6} style={{height: '100vh', width: '100%'}}>
                    <Form className="loginForm">
                        <Form.Group>
                            <Form.Label className="formLabel">username</Form.Label>
                            <Form.Control type="text" placeholder="enter your username" className="formControl" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="formLabel">password</Form.Label>
                            <Form.Control type="password" placeholder="password" className="formControl" />
                            <Form.Text className="text-muted">
                                <a href="#">you forgot the password?</a>
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }

  export default Landing;