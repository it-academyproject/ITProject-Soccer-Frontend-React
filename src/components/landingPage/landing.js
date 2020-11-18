import React, { Component } from 'react';

import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import './landing.css';

import FormErrors from './FormErrors.js';

class Landing extends Component {
        constructor (props) {
            super(props);
            this.state = {
              username: '',
              password: '',
              formErrors: {username: '', password: ''},
              usernameValid: false,
              passwordValid: false,
              formValid: false
            }
        }
        
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

        render () {
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
                                    <Form.Control type="email" required placeholder="enter your username" name="username" className={`formControl ${this.errorClass(this.state.formErrors.username)}`} value={this.state.username} onChange={(event) => this.handleChange(event)}/>
                                </Form.Group>
        
                                <Form.Group>
                                    <Form.Label className="formLabel">password</Form.Label>
                                    <Form.Control as="input" type="password" required placeholder="password" name="password" className={`formControl ${this.errorClass(this.state.formErrors.password)}`} value={this.state.password} onChange={(event) => this.handleChange(event)}/>
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

  export default Landing;