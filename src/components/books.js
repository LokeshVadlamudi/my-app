import React, { Component } from 'react';
import { CardDeck, Row, Col, Container, Card} from 'react-bootstrap';
import {Link} from "react-router-dom"

class Books extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <Container>
          <Row>

            {this.props.books.map((book, index) => (

              <Col md="auto">
                <CardDeck>
                  <Card style={{ width: '20rem' }}>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        <p><b>Author:</b>{book.authors}</p>
                        <p><b>Rating:</b>{book.average_rating}</p>
                        <p><b>BookID:</b>{book.bookID}</p>
                        <p><b>ISBN:</b>{book.isbn}</p>
                        <p><b>Year Publish:</b>{book.year}</p>
                        <p><b>Publisher:</b>{book.publisher}</p>
                      </Card.Text>
                      <Link to={`/bookinfo/${book.bookID}`}>Learn More</Link>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Books;






