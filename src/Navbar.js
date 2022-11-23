import 'bootstrap/dist/css/bootstrap.css'
import '../src/App.css'
import {Card, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Navigation() {
  return (
    <div>
    <link rel='stylesheet' href='./App.css'></link>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>CRACKER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/intro"}>소개</Nav.Link>
            <Nav.Link as={Link} to={"/graph-dotmap"}>그래프</Nav.Link>
            <Nav.Link as={Link} to={"/data-image"}>데이터</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </div>
  );
}

export default Navigation;