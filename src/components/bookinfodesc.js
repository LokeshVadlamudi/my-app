import React from "react";
import { Container, Row } from "react-bootstrap/";
import { Jumbotron, Button } from "react-bootstrap/";
import { Link } from "react-router-dom";
import auth0Client from "./Auth";

const BookInfoDesc = ({ books }) => {
  return (
    <div>
      <Container>
        <Row>
          {books.map((book, index) => (
            <div>
              <Jumbotron>
                <h3 className="display-3">{book.title}</h3>
                <Link to={`/search/?title=&authors=${book.authors}&language=`}>
                  {" "}
                  <b>Author: </b>
                  {book.authors}
                </Link>
                <p className="lead">
                  <b>Rating:</b>
                  {book.average_rating}
                </p>
                <p className="lead">
                  <b>BookID:</b>
                  {book.bookID}
                </p>
                <p className="lead">
                  <b>ISBN:</b>
                  {book.isbn}
                </p>
                <p className="lead">
                  <b>Publisher:</b>
                  {book.publisher}
                </p>
                <p className="lead">
                  <b>Year Published:</b>
                  {book.year}
                </p>
                {!auth0Client.isAuthenticated() && (
                  <Button
                    variant="primary"
                    className="btn btn-dark"
                    onClick={auth0Client.signIn}
                  >
                    Request
                  </Button>
                )}
                {auth0Client.isAuthenticated() && (
                  <div>
                    <Button variant="primary" className="btn btn-dark">
                      Request
                    </Button>
                  </div>
                )}
              </Jumbotron>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default BookInfoDesc;
