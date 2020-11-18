import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './landing.css';

const Landing = (user, setUser) => {
    

    const handleSubmit = (event) => {
        //const email = "ecomes@soccer.com";
        //const password = "ecomes_soccer";

        const email = user.username;
        const password = user.password;

        fetch('http://217.76.158.200:8181/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${password}`
            })
        }).then(response => response.json())
            .then(data =>
                console.log(data));
    };

    function handleChange(e){
        
    }

    return (
        <div className="landing">
            <Container>
                <Row style={{ width: '100%' }}>
                    <Col xs={12} md={6}>
                    </Col>
                    <Col xs={12} md={6} style={{ height: '100vh', width: '100%' }}>
                        <Form className="loginForm" onSubmit={handleSubmit()}>
                            <Form.Group>
                                <Form.Label className="formLabel">username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="enter your username"
                                    className="formControl"
                                    value={""}
                                    onChange={handleChange("e")}
                                    name="username"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel">password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    className="formControl"
                                    value={""}
                                    onChange={handleChange("e")}
                                    name="password"
                                />
                                <Form.Text className="text-muted">
                                    <a href="/">you forgot the password?</a>
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