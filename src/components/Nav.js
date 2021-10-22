import React from "react";
import { useHistory } from "react-router";
import "./css/Nav.css";

function Nav() {
  const history = useHistory();

  return (
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
          <a href="/" className="__option active" to="/">
            Home
          </a>

          <a href="/" className="__option" to="/">
            TV Shows
          </a>

          <a href="/" className="__option" to="/">
            Movies
          </a>
          <a href="/" className="__option" to="/">
            Recently Added
          </a>
          <a href="/" className="__option" to="/">
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
          <a href="/" className="__option search-icon active" to="">
            <i className="  fa fa-bell "></i>
          </a>
          <a href="/" className="__option __option--signin" to="/signin">
            <img
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt="logo"
              className="__avatar"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
