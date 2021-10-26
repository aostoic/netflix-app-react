import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";

import {
  faPlay,
  faQuestionCircle,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import Home from "../Home";

function DetailsMovie() {
  const location = useLocation();
  let movie = location.state;
  movie.description =
    movie.description.length > 320
      ? `${movie.description.slice(320)}..`
      : movie.description;

  return (
    <div>
      <div className="details-content-limits">
        <div className="details-base">
          <div className="details-image-wrapper">
            <img src={movie.img} alt={"hero"} />

            <div className="details-vignette"></div>
            <div className="details-vignette-bottom"></div>
            <div className="details-maturity-rating">
              <span>+18</span>
            </div>
          </div>

          <div className="details-information">
            <div className="logo-and-text">
              <div className="">
                <h1 style={{ fontSize: "45px" }}> {movie.name}</h1>
              </div>

              <div className="details-description">
                <div className="episode-title-container"></div>
                <div className="synopsis">{movie && movie.description}</div>
              </div>

              <div className="details-link">
                <a className="play-link" href={"/"}>
                  <button className="hasLabel">
                    <span className="play-icon">
                      <FontAwesomeIcon icon={faPlay} />
                    </span>
                    <span>Play</span>
                  </button>
                </a>

                <button className="hasLabel play-link-secondary">
                  <span className="play-icon">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                  <span>Information</span>
                </button>
                <button className="hasLabel play-link-secondary">
                  <span className="play-icon">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </span>
                </button>

                <button className="hasLabel play-link-secondary">
                  <span className="play-icon">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default DetailsMovie;
