import React, { Component } from 'react';
import './App.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import LayoutNavbar from './components/layout/LayoutNavbar';
import AdminUsers from './components/admin/AdminUsers';
import AdminUsersSingle from './components/admin/AdminUsersSingle';
import AdminMatchCreator from './components/admin/AdminMatchCreator';
import AdminPlayers from './components/admin/AdminPlayers';
import AdminPlayersSingle from './components/admin/AdminPlayersSingle';
import ManagerLineUps from './components/manager/ManagerLineUps';
import ManagerMarket from './components/manager/ManagerMarket';
import ManagerMatches from './components/manager/ManagerMatches';
import ManagerPlayers from './components/manager/ManagerPlayers';
import ManagerTeam from './components/manager/ManagerTeam';
import ManagerStats from './components/manager/ManagerStats';

class App extends Component {
  state = {
    user: null
  };

  componentDidUpdate() {
    console.log(this.state.user);
  }

  handleOnClick = (event) => {
    this.setState({
      user: event.target.value
    });
    console.log("Dentro de handleOnClick " + event.target.value);
    //console.log(this.state.user);
  }

  render() {
    return (
      <Container className="p-4" fluid>
        <header>
          <Row className="bg-secondary border border-white">
            <Col xs={8} className="">
              <Row className="">
                <Col xs={12} className="border border-white p-3">
                  <h1 className="text-center text-white">Football Academy</h1>
                </Col>
                <Col xs={12} className="border p-3">
                  <LayoutNavbar user={this.state.user} />
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="text-center text-white border">
              <h3 className="pt-4">User select: {this.state.user}</h3>
              <Link to="/home">
                <Button type="button" value="Admin" onClick={this.handleOnClick} className="button" variant="warning">Admin</Button>
                <Button type="button" value="Manager" onClick={this.handleOnClick} className="button" variant="danger">Manager</Button>
              </Link>
            </Col>
          </Row>
        </header>
        <section>
          <Row>
            <Col xs={12} className="bg-dark text-white text-center" style={{ minHeight:715 }}>
              <h1 className="p-3">Layout Component Selected</h1>
              <Switch>
                <Route path='/adminPlayers' exact><AdminPlayers /></Route>
                <Route path='/adminPlayers/Single'><AdminPlayersSingle /></Route>
                <Route path='/adminUsers' exact><AdminUsers /></Route>
                <Route path='/adminUsers/Single'><AdminUsersSingle /></Route>
                <Route path='/adminMatchCreator'><AdminMatchCreator /></Route>

                <Route path='/managerTeam'><ManagerTeam /></Route>
                <Route path='/managerPlayers'><ManagerPlayers /></Route>
                <Route path='/managerMatches'><ManagerMatches /></Route>
                <Route path='/managerMarket'><ManagerMarket /></Route>
                <Route path='/managerStats'><ManagerStats /></Route>
                <Route path='/managerLineUps'><ManagerLineUps /></Route>




              </Switch>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }

}

export default App;
