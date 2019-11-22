import React, { Component } from "react";
import { Route } from "react-router-dom";
import Index from "./index";
import Search from "./search";
import addbook from "./addbook";
import Callback from "./Callback";
import BookInfo from "./bookinfo";
import deletebook from "./deletebook";
import deleteuser from "./deleteuser";
import Requests from "./Requests";
import Returns from "./Returns";

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/search" component={Search} />
        <Route path="/Callback" component={Callback} />
        <Route path="/addbook" component={addbook} />
        <Route path="/bookinfo" component={BookInfo} />
        <Route path="/deletebook" component={deletebook} />
        <Route path="/deleteuser" component={deleteuser} />
        <Route path="/Requests" component={Requests} />
        <Route path="/Returns" component={Returns} />
      </div>
    );
  }
}

export default Main;
