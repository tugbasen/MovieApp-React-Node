import React from "react";
import {
  CircularProgress,
  Typography,
  withStyles,
  Box,
} from "@material-ui/core";
import { AiOutlinePercentage } from "react-icons/ai";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import MovieDetails from "../screens/MovieDetails";

const MovieCard = ({ movies }) => {

  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);

  return (
    <Card className="card shadow mb-5 bg-body rounded" >
      <Link
        className="cardLink"
        to={`detail/${movies.movieId}`}
        // onClick={() => <MovieDetails movieId={movies.id} />}
      >
        <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${
                movies && movies.poster_path
              }`}
              alt={`${movies} Poster`}
              className="card-img-top movieCardImage"
            />
          {/* <span className="card__rating">{movies.vote_average}</span> */}
          <span>
            <Box position="relative" display="inline-block" className="score">
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
                <WhiteTextTypography style={{ fontSize: "13px" }} variant="h6">
                  {`${movies.vote_average * 10}`}
                  <AiOutlinePercentage style={{ paddingBottom: "5px" }} />
                </WhiteTextTypography>
              </Box>
            </Box>
          </span>
        </div>
        <div className="card-body movieCardBody">
          <p className="card-title">
            <b>{movies.title}</b>
          </p>
          <p className="card-text">{movies.release_date}</p>
        </div>
        <div></div>
      </Link>
    </Card>
  );
};

export default MovieCard;