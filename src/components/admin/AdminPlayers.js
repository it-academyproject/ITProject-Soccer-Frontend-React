import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import image from '../img/Admin-Players.png';

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
            <Link to="/adminPlayers/Single" >
                <Image src={image} fluid />
            </Link>

        );

    }

}

export default AdminPlayers;