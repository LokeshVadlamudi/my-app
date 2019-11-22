import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import auth0Client from './Auth'
import { withRouter } from 'react-router-dom';


class Navbarhome extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
  }
  signOut = () => {
    auth0Client.signOut();
    this.props.history.replace('/');
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">LIMS - Library Management Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Reports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Due Dates and Books</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Request Books</Nav.Link>
              {
                !auth0Client.isAuthenticated() &&
                <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
              }
              {
                auth0Client.isAuthenticated() &&
                <div>
                  <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                  <button className="btn btn-dark" onClick={() => { this.signOut() }}>Sign Out</button>
                </div>
              }
              <Nav.Link eventKey={2} href="#memes">
                Change User
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Navbarhome);