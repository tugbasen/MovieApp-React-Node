import React from "react";
import * as S from './styles';

const MovieFilters = () => {
  return (
    <S.MovieFilters>
    <div className=" movieFilters">
      <div className="btn-group dropend border border-1 rounded mb-3 shadow-sm buttonStyle ">
        <button type="button" className="btn btn-white">
          <b>Sort</b>
        </button>
        <button
          type="button"
          className="btn btn-white dropdown-toggle dropdown-toggle-split buttonArrow"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </button>
        <ul className="dropdown-menu">{/* Dropdown menu links */}</ul>
      </div>
      <div className="btn-group dropend border border-1 rounded mb-3 shadow-sm buttonStyle ">
        <button type="button" className="btn btn-white">
          <b>Filters</b>
        </button>
        <button
          type="button"
          className="btn btn-white dropdown-toggle dropdown-toggle-split buttonArrow"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </button>
        <ul className="dropdown-menu">{/* Dropdown menu links */}</ul>
      </div>
      <div className="btn-group dropend border border-1 rounded mb-3 shadow-sm buttonStyle ">
        <button type="button" className="btn btn-white">
          <b>Where To Watch</b>
        </button>
        <button
          type="button"
          className="btn btn-white dropdown-toggle dropdown-toggle-split buttonArrow"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </button>
        <ul className="dropdown-menu">{/* Dropdown menu links */}</ul>
      </div>
    </div>
    </S.MovieFilters>
  );
};

export default MovieFilters;
