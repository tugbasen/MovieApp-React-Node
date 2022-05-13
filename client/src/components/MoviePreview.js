import React from "react";
import Color from "color";
import { Row, Col, Container, Button } from "react-bootstrap";
import {
  CircularProgress,
  Typography,
  withStyles,
  Box,
} from "@material-ui/core";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

import * as S from './styles';

const MoviePreview = ({ movies }) => {
  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);


  return (
    <div className="movieSummary">
      <div className="movieBackdrop">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${
            movies && movies.backdrop_path
          }`}
          alt={`${movies} Backdrop`}
          className="imageBackdrop"
        />
        <div className="container ">
          <Row className="rowPart">
            <Col xs={3}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${
                  movies && movies.poster_path
                }`}
                alt={`${movies} Poster`}
                className="imagePoster"
              />
            </Col>
            <Col xs={9}>
              <div className="aboutMovie">
                <div>
                  <span className="detailMovieTitle">
                    {movies.original_title}{" "}
                  </span>
                  <span>({new Date(movies.release_date).getFullYear()})</span>
                </div>
                <div style={{ marginTop: 5 }}>
                  <span className="detailBox">TV-14</span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    {"\u25CF"}
                  </span>
                  <span style={{fontSize: 13}}>{movies?.genres?.map( (item) => item.name).join(", ")}</span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    {"\u25CF"}
                  </span>
                  <span style={{ fontSize: 13 }}>
                    {(movies.runtime / 60).toFixed()}h{" "}
                  </span>
                  <span style={{ fontSize: 13 }}>
                    {movies.runtime % 60}min{" "}
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <span>
                    <Box
                      position="relative"
                      display="inline-block"
                      className="movieDetailScore"
                    >
                      <Box position="absolute">
                        <CircularProgress
                          className="firstCircule"
                          size={50}
                          variant="determinate"
                          value={100}
                        />
                      </Box>
                      <CircularProgress
                        size={50}
                        className="circule"
                        variant="determinate"
                        value={movies.vote_average * 10}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <WhiteTextTypography
                          style={{ fontSize: "13px" }}
                          variant="h6"
                        >
                          {`${movies.vote_average * 10}`}
                          <AiOutlinePercentage
                            style={{ paddingBottom: "5px" }}
                          />
                        </WhiteTextTypography>
                      </Box>
                    </Box>
                  </span>
                  <span style={{ position: "absolute", marginTop: 15 }}>
                  <S.MoviePreview>
                    <span className="userScore">
                      User <br /> Score
                    </span>
                    <span className="tags">
                      <BsCardList size={18} />
                    </span>
                    <span className="tags">
                      <FaHeart size={18} />
                    </span>
                    <span className="tags">
                      <MdBookmarkAdd size={18} />
                    </span>
                    <span className="tags">
                      <AiFillStar size={18} />
                    </span>
                    <span style={{ marginLeft: 30 }}>
                      <BsFillPlayFill />
                    </span>
                    <span>Play Trailer</span>
                    </S.MoviePreview>
                  </span>
                </div>
                <div className="tagline">
                  <i>{movies.tagline}</i>
                </div>
                <div>
                  <div style={{fontSize: 15, marginBottom: 10}}><b>Overview</b></div>
                  <div style={{fontSize: 15}}>{movies.overview}</div>
                </div>
                <div style={{marginTop: 20}}>
                    <div><b>{movies?.production_companies?.map((item) => item.name).join(", ")}</b></div>
                    <div>Director</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default MoviePreview;