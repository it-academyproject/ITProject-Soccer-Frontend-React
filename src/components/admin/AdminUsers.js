import React, { Component } from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

class AdminUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataManagers: [],
            id: "",
            type_user: "",
            email: "",
            team_id: null,
            team_name: null,
            players: null, 
        }

    }

    componentDidMount() {
        fetch("http://217.76.158.200:8181/api/users", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MDU4NjAyOTAsImlzcyI6InNlY3VyZS1hcGkiLCJzdWIiOiJyYWxjYWxkZUBzb2NjZXIuY29tIiwiZXhwIjoxNjA2NzA2MjkwfQ.bKiFRTF_6DakyMs25aE5untDfUFbVdldeAB7qDeYVrGQzNGoaByfELBu-m9rFITl1_B_ulC6VuE26P2FT_nqpw'
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ dataManagers: data }));
    }

    render() {
        return (
                <Container>
                    <Row>
                        <Col xs={1}>
                        </Col>
                        <Col xs={10}>
                        <Table className="table table-hover" style={{backgroundColor:'#fff', borderRadius: '5px'}}>
                            <thead className="thead-light"> 
                                <tr>
                                    <th>Manager Name</th>
                                    <th>Team</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dataManagers.map(manager =>
                                <tr key={manager.id}>
                                    <td>{manager.email}</td>
                                    <td>{manager.password}</td>
                                    <td><a href="#">Delete</a> / <a href="#">View Details</a></td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                        <Button variant="warning" type="submit">New Manager</Button>
                        </Col>
                        <Col xs={1}>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default AdminUsers;
