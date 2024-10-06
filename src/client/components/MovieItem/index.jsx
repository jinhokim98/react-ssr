import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../../constants/tmdb";
import round from "../../../utils/round";

const MovieItem = ({ movie }) => {
  return (
    <li>
      <div className="item">
        <img className="thumbnail" src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`} alt={movie.title} />
        <div className="item-desc">
          <p className="rate">
            <img src="/assets/images/star_empty.png" className="star" />
            <span>${round(movie.vote_average, 1)}</span>
          </p>
          <strong>${movie.title}</strong>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;