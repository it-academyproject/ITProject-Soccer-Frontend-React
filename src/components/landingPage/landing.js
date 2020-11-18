import React, { Component } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import LayoutContainer from '../layout/LayoutContainer';
import './landing.css';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            data: null,
            token: "",
            message: "",
            success: false,
            team_id: "",
            type_user: "",
        }
    }

    handleSubmit = (event) => {

        const email = this.state.username;
        const password = this.state.password;

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
            .then(data => {
                if (data.success) {
                    this.setState({
                        data: data,
                        token: data.Token,
                        message: data.message,
                        success: data.success,
                        team_id: data.team_id,
                        type_user: data.type_user,
                    })
                }else{
                    alert(data.message)
                }
            });
        event.preventDefault();
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnClick = () => {
        this.setState({
            username: "",
            password: "",
            data: null,
            token: "",
            message: "",
            success: false,
            team_id: "",
            type_user: "",
        });
    }

    render() {
        if (this.state.success) {
            return (
                <LayoutContainer
                    type_user={this.state.type_user}
                    username={this.state.username}
                    onClick={this.handleOnClick}
                />
            )
        } else {
            return (
                <div className="landing">
                    <Container>
                        <Row style={{ width: '100%' }}>
                            <Col xs={12} md={6}>
                            </Col>
                            <Col xs={12} md={6} style={{ height: '100vh', width: '100%' }}>
                                <Form className="loginForm" onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label className="formLabel">username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="enter your username"
                                            className="formControl"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            name="username"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="formLabel">password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="password"
                                            className="formControl"
                                            value={this.state.password}
                                            onChange={this.handleChange}
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
    }
}

export default Landing;