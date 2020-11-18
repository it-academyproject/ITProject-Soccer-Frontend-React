import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LayoutNavbar = (props) => {

    if (props.user === "ADMIN") {
        return (
            <Navbar bg="" variant="dark">
                <Navbar.Brand className="text-warning mr-5"></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/adminPlayers" className="link">Players</Link>
                    <Link to="/adminUsers" className="link">Users</Link>
                    <Link to="/adminMatchCreator" className="link">Match Creator</Link>
                </Nav>
            </Navbar>
        );
    }
    else if (props.user === "MANAGER") {
        return (
            <Navbar bg="" variant="dark">
                <Navbar.Brand className="text-warning mr-1"></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/managerTeam" className="link">Team</Link>
                    <Link to="/managerPlayers" className="link">Players</Link>
                    <Link to="/managerMatches" className="link">Matches</Link>
                    <Link to="/managerMarket" className="link">Market</Link>
                    <Link to="/managerStats" className="link">Stats</Link>
                    <Link to="/managerLineUps" className="link">LineUps</Link>
                </Nav>
            </Navbar>
        );
    } else {
        return (
            <Navbar bg="" variant="dark">
                <Navbar.Brand><h1 className="text-warning">Select User Admin/Manager to display the NavBar </h1></Navbar.Brand>
            </Navbar>
        );
    }
}

export default LayoutNavbar;