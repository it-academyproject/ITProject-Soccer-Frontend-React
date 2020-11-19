import React, { Component } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import LayoutContainer from '../layout/LayoutContainer';
import './landing.css';
import FormErrors from './FormErrors.js';


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
            formErrors: {username: '', password: ''},
            usernameValid: false,
            passwordValid: false,
            formValid: false,
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

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {[name]: value},
            () => { this.validateField(name, value)}
        );
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'username':
            usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.username = usernameValid ? '' : ' should be an email';
            break;
          case 'password':
            passwordValid = value.length >= 8;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        usernameValid: usernameValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
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
                                            required
                                            placeholder="enter your username"
                                            className={`formControl ${this.errorClass(this.state.formErrors.username)}`}
                                            value={this.state.username}
                                            onChange={(event) => this.handleChange(event)}
                                            name="username"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="formLabel">password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            required
                                            placeholder="password"
                                            className={`formControl ${this.errorClass(this.state.formErrors.password)}`}
                                            value={this.state.password}
                                            onChange={(event) => this.handleChange(event)}
                                            name="password"
                                        />
                                        <Form.Text className="text-muted">
                                            <a href="#">you forgot the password?</a>
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" disabled={!this.state.formValid}>
                                        Sign in
                                  </Button>
                                  <div className="panel panel-default">
                                    <FormErrors formErrors={this.state.formErrors} />
                                  </div>
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
