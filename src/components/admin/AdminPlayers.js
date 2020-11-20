import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MDU4NjAyOTAsImlzcyI6InNlY3VyZS1hcGkiLCJzdWIiOiJyYWxjYWxkZUBzb2NjZXIuY29tIiwiZXhwIjoxNjA2NzA2MjkwfQ.bKiFRTF_6DakyMs25aE5untDfUFbVdldeAB7qDeYVrGQzNGoaByfELBu-m9rFITl1_B_ulC6VuE26P2FT_nqpw';
const API = 'http://217.76.158.200:8181/api';

class AdminPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPlayers: null,
            dataTeams: null
        }
    }

    componentDidMount() {

        fetch(API + '/players', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': TOKEN
            },
        })
            .then(response => response.json())
            .then(data => { this.setState({ dataPlayers: data }) });

        fetch(API + '/teams', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': TOKEN
            },
        })
            .then(response => response.json())
            .then(data => { this.setState({ dataTeams: data }) });
    }

    componentDidUpdate() {
        console.log(this.state.dataPlayers);
        console.log(this.state.dataTeams);
    }
    render() {
        return (
            <Row className="d-flex justify-content-center">
                <Col xs="8">
                    <Row>
                        <Col xs="10" >
                            <Table striped bordered hover>
                                <thead className="thead-dark ">
                                    <tr>
                                        <th>Player name</th>
                                        <th>Team</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                           <a href="#">Delete</a> ------- <a href="#">View Detail</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs="2">
                            <Link to="/adminPlayers/Single" >
                                <Button variant="warning" size="lg">New Player</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default AdminPlayers;