"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PrimaryButton } from "../buttons/Button";

const navLinks = ["about", "contact", "dashboard", "portfolio", "blog"];

const Header = () => {
  return (
    <>
      {/* <Link href="/">Home</Link>
      {navLinks.map((data, i) => (
        <Link key={i} href={`/${data}`}>
          <Button variant="text">Text</Button>
        </Link>
      ))} */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((data, i) => (
                <Nav.Link key={i} href={`/${data}`}>
                  {data.charAt(0).toUpperCase() + data.slice(1)}
                  {/* <Button variant="text">Text</Button> */}
                  {/* <Nav.Link>Home</Nav.Link> */}
                </Nav.Link>
              ))}

              <PrimaryButton title="Logout" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
