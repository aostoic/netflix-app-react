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
  const leftas = ["Home", "TV Shows", "Movies", "Latest", "My List"];
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
    <>
      <div className="header ">
        <div className="__logo-box" onClick={() => history.push("/")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            className="__logo"
          />
        </div>

        <div className="__options">
          <div className="__options-primary">
            <a className="__option active" to="/">
              Home
            </a>

            <a className="__option" to="/">
              TV Shows
            </a>

            <a className="__option" to="/">
              Movies
            </a>
            <a className="__option" to="/">
              Recently Added
            </a>
            <a className="__option" to="/">
              My List
            </a>
          </div>

          <div className="__searchbar">
            <div className="container-1">
              <div className="container-2">
                <span className="search-icon">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="search"
                  id="search"
                  placeholder="Movies, TV Shows..."
                />
              </div>
            </div>
          </div>

          <div className="__options-secondary">
            <a className="__option search-icon active" to="">
              <i className="  fa fa-bell "></i>
            </a>
            <a className="__option __option--signin" to="/signin">
              <img
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="logo"
                className="__avatar"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className={`nav ${show && "nav_black"}`}>
        <img
        // onClick={() => history.push("/")} // go to profile
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="avatar"
      />

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
          {leftas.map((a) => (
            <li key={a}>
              <a href="/">{a}</a>
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
      </div> */}
    </>
  );
}

export default Nav;
