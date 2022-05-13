import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsLink } from "react-icons/bs";

import CastCard from "../components/CastCard";
import MoviePreview from "../components/MoviePreview";
import * as S from "../components/styles";

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [casts, setCasts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movie/${id}`)
      .then((response) => response.data.movie[0])
      // .then(response => {console.log(response)})
      .then((response) => {
        setMovies(response);

        axios
          .get(`http://localhost:5000/movie/${id}`)
          .then((response) => response.data.casts[0])
          .then((response) => {
            // console.log(response.cast);
            setCasts(response.casts);
          });
      });
  }, []);

  return (
    <S.MovieDetails>
      <div className="container">
        <MoviePreview movies={movies} />
        <div>
          <Row>
            <Col xs={9}>
              <div className="castContainer">
                <h3>Series Casts</h3>
                <div className="card-group grid casts">
                  {casts &&
                    casts.map((cast) => (
                      <React.Fragment key={cast.cast_id}>
                        {cast.profile_path && (
                          <CastCard
                            image={`${cast.profile_path}`}
                            casts={cast}
                          />
                        )}
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div>
                <div>
                  <span style={{ marginRight: 10 }}>
                    <AiFillFacebook size={20} />
                  </span>
                  <span style={{ marginRight: 10 }}>
                    <AiOutlineTwitter size={20} />
                  </span>
                  <span style={{ marginRight: 10 }}>
                    <AiOutlineInstagram size={20} />
                  </span>
                  <span>
                    <BsLink size={20} />
                  </span>
                </div>
                <p style={{ marginTop: 10 }}>
                  <b>Facts</b>
                </p>
                <p>
                  <b>Status</b>
                  <br />
                  <span>Returning Series</span>
                </p>

                <p>
                  <b>Network</b>
                  <br />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/767px-American_Broadcasting_Company_Logo.svg.png"
                    height={30}
                  />
                </p>
                <p>
                  <b>Type</b>
                  <br />
                  <span>Scripted</span>
                </p>
                <p>
                  <b>Original Language</b>
                  <br />
                  <span>English</span>
                </p>
                <p>
                  <b>Keywords</b>
                  <br />
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    nurse
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    san francisco, california
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    austim
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    medicine
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    remake
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    hospital
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    medical drama
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    medical
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    based on tv series
                  </button>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </S.MovieDetails>
  );
};

export default MovieDetails;
