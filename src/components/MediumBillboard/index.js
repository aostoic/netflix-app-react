import React, { useEffect, useState } from "react";
import { getMovieInformation, IMAGE_BASE } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

function MediumBillboard() {
  const [poster, setPoster] = useState(null);
  const [background, setBackground] = useState(null);
  const [secondaryBackground, setSecondaryBackground] = useState(null);
  const [synopsis, setSynopsis] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(async () => {
    let movie = await getMovieInformation("530915").then(
      (response) => response.data
    );
    console.log(movie);
    setPoster(`${movie.img}`);
    setBackground(`${movie.img}`);
    setSecondaryBackground(`${movie.img}`);
    setSynopsis(movie.description);
    setTitle(movie.name);

    if (movie.img > 1) setSecondaryBackground(`${movie.description}`);
  }, []);

  return (
    <div className="medium-billboard">
      <div className="medium-details-wrapper">
        <div>
          <div
            style={{ "background-image": `url(${background})` }}
            className="medium-details-background-image"
          ></div>

          <div className="md-details-video">
            <img
              src={secondaryBackground ? secondaryBackground : background}
              alt={"background"}
            />

            <div className="md-details-video-button">
              <span className="md-details-maturity">+13</span>
            </div>
          </div>

          <div className="md-details-info">
            <div className="md-details-title">{title}</div>

            <div className="details-link">
              <a className="play-link" href={"/"}>
                <button className="hasLabel">
                  <span className="play-icon">
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                  <span>Reproducir</span>
                </button>
              </a>

              <button className="hasLabel play-link-secondary">
                <span className="play-icon">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </span>
                <span>Más informacion</span>
              </button>
            </div>

            <div className="details-additional-information"></div>

            <div className="details-synopsis">{synopsis}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediumBillboard;
