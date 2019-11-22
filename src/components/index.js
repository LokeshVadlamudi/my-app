import React, { Component } from "react";
import "../App.css";
import Search from "./search";
import Navbarhome from "./navbar";
import Leftbar from "./leftbar";
import Request from "./Requests";
import Returns from "./Returns";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import Image from "../img/main.jpg";
import Requests from "./Requests";
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://ronakmehta21.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: "ghU3e2uuYAyEMW1JXsOeejcAtOk2Rncp",
  issuer: `https://ronakmehta21.auth0.com/`,
  algorithms: ["RS256"]
});

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};

class Index extends Component {
  render() {
    return (
      <div style={styles.paperContainer}>
        <Navbarhome />
        <Row>
          <Leftbar />
          <Requests />
          <Returns />
        </Row>
      </div>
    );
  }

  // componentDidMount() {
  //   let url = 'http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books';
  //       fetch(url)
  //       .then(res => res.json())
  //       .then(data => {
  //         const a=[]
  //         for (var i in data){
  //         a.push(data[i])
  //       }
  //       console.log(a)
  //       this.setState({ books: a })
  //       })
  //       .catch(console.log)
  //     }
}
//http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books
//Export the App component so that it can be used in index.js
export default Index;
