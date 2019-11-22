import React, { Component } from "react";
import axios from "axios";
import "../App.css";
// import Books from "./books";
import Navbarhome from "./navbar";
import Leftbar from "./leftbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { CardDeck, Col, Container, Card } from "react-bootstrap";

class deleteuser extends Component {
  state = {
    id: ""
  };

  handleChange = event => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var id = this.state.id;
    axios
      .delete(
        "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/users/" + id
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("user has been deleted");
      });
  };

  render() {
    return (
      <div>
        <Navbarhome />
        <Row>
          <Leftbar />

          <Card>
            <Card.Body>
              <Card.Title class="text-center">
                <kbd>DELETE USER</kbd>
              </Card.Title>
              <br></br>
              <Card.Text>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="User Id"
                    name="id"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <center>
                    <button type="submit" class="btn-danger btn">
                      Delete
                    </button>
                  </center>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}

export default deleteuser;
