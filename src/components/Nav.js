import React, { useState } from "react";
import { useHistory } from "react-router";
import "./css/Nav.css";
import {
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Icon from "./Icon";

function Nav() {
  const [show] = useState(true);
  const history = useHistory();
  const leftLinks = ["Home", "TV Shows", "Movies", "Latest", "My List"];
  //   const scrollFunction = () => {
  //     if (window.scrollY >= 0) {
  //       handelShow(true);
  //     } else handelShow(false);
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", scrollFunction);
  //     return () => {
  //       window.removeEventListener("scroll", scrollFunction);
  //     };
  //   }, []);
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>

    <div className={`nav ${show && "nav_black"}`}>
      {/* <img
          // onClick={() => history.push("/")} // go to profile
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="avatar"
        /> */}

      <ul>
        <li>
          <img
            onClick={() => history.push("/")}
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </li>
      </ul>
      <ul>
        {leftLinks.map((link) => (
          <li key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>

      <ul className="right">
        <li>
          <Icon type="search" />
        </li>
        <li>
          <Icon type="bell-o" />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
