import React, { Component } from "react";
import "../App.css";
import Navbarhome from "./navbar";
import Leftbar from "./leftbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { CardDeck, Col, Container, Card } from "react-bootstrap";
import axios from "axios";

class addbook extends Component {
  state = {
    bookID: "",
    title: "",
    isbn: "",
    authors: "",
    average_rating: "",
    count: "",
    year: "",
    publisher: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const book = {
      bookID: this.state.bookID,
      title: this.state.title,
      isbn: this.state.isbn,
      authors: this.state.authors,
      average_rating: this.state.average_rating,
      year: this.state.year,
      count: this.state.count,
      publisher: this.state.publisher
    };
    axios
      .post(
        "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books",
        book
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("book has been added");
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
                <kbd>ADD BOOK</kbd>
              </Card.Title>
              <br></br>
              <Card.Text>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title of the Book"
                    name="title"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Book Id"
                    name="bookID"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Author"
                    name="authors"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Publisher"
                    name="publisher"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Year Published"
                    name="year"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="ISBN"
                    name="isbn"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Rating"
                    name="average_rating"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Count"
                    name="count"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <button type="submit" class="btn-outline-success btn">
                    Add Book
                  </button>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
  state = {
    books: []
  };
}

export default addbook;
