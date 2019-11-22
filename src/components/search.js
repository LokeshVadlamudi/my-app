import React, { Component } from "react";
import "../App.css";
import Books from "./books";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, InputGroup, FormControl, Button, Col } from "react-bootstrap";

import Image from "../img/main.jpg"; // Import using relative path

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSearch = e => {
    e.preventDefault();
    // const searchString = this.state.searchString;
    // let url = 'http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books?authors=' + searchString;
    var bookId = this.state.searchString;
    console.log("bookid", bookId);

    if (bookId === "undefined" || bookId === null || bookId === " ") {
      console.log("in here");
      var url2 =
        "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books?authors=" +
        bookId;
    } else {
      var url2 =
        "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books?authors=" +
        bookId;
    }
    console.log(url2);
    let url = url2;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const a = [];
        for (var i in data) {
          a.push(data[i]);
        }
        console.log(a);
        this.setState({ books: a });
      })
      .catch(console.log);
  };

  render() {
    let booksArray = [];
    if (this.state && this.state.books) {
      booksArray = this.state.books;
    }
    return (
      <div style={styles.paperContainer}>
        <Col>
          <center>
            <h3>Search {"&"} Find</h3>
          </center>
          <Col>
            <form onSubmit={this.onSearch}>
              <InputGroup size="lg">
                <FormControl
                  placeholder="Search anything"
                  aria-describedby="basic-addon2"
                  name="searchString"
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </form>
          </Col>
        </Col>
        <Row>
          <Books books={booksArray} />
        </Row>
      </div>
    );
  }
}
//http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books
//Export the App component so that it can be used in index.js
export default Search;
