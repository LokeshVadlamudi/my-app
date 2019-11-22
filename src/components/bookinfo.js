import React, { Component } from "react";
import "../App.css";
import BookInfoDesc from "./bookinfodesc";
import Navbarhome from "./navbar";
import Leftbar from "./leftbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

class BookInfo extends Component {
  render() {
    return (
      <div>
        <Navbarhome />
        <Row>
          <Leftbar />
          <BookInfoDesc books={this.state.books} />
        </Row>
      </div>
    );
  }
  state = {
    books: []
  };

  componentDidMount() {
    var bookId = window.location.pathname.split("/")[2];
    let url =
      "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books/" +
      bookId;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const a = [];

        a.push(data);

        console.log(a);
        this.setState({ books: a });
      })
      .catch(console.log);
  }
}
//http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books

//Export the App component so that it can be used in index.js
export default BookInfo;
