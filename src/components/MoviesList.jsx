import React, { useState } from 'react';
import { tempMovieData } from '../data';
import Movie from './Movie';

const MoviesList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
