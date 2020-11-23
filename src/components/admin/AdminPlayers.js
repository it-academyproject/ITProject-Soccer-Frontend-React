import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

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
            .then(data => { this.setState({ dataTeams: data }); console.log(data.teams[0].name) });
    }

    render() {
        if (this.state.dataPlayers !== null && this.state.dataTeams !== null) {
            console.log( this.state.dataPlayers.players);
            console.log( this.state.dataTeams.teams);
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
                                        {this.state.dataPlayers.players.map((player, index) =>
                                        <tr key= {index}>
                                            <td>{player.name}</td>
                                            <td>{this.state.dataTeams.teams[player.team_id -1].name}</td>
                                            <td>
                                                <Link to="/adminPlayers/Single"> <FontAwesomeIcon icon={faTrashAlt} /></Link>
                                                <Link to="/adminPlayers/Single"> <FontAwesomeIcon icon={faSearch} /></Link>
                                            </td>
                                        </tr>)}
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
        else {
            return (<h1>Esperando datos</h1>);
        }


    }
}

export default AdminPlayers;