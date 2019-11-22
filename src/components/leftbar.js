import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const LeftBar = ({ books }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        // style={"min-height:100%"}
        style={{ minHeight: 100 + "vh" }}
        expand="lg"
        bg="dark"
        variant="dark"
        className="flex-column"
      >
        <Nav className="mr-auto">
          <li>
            <Nav.Link href="/features">Author</Nav.Link>
            <Nav.Link href="/pricing">My Books</Nav.Link>
          </li>
        </Nav>
      </Navbar>
    </div>
  );
};
export default LeftBar;

//className="flex-column"
