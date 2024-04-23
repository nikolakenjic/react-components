import { useState } from 'react';
import {
  Box,
  Main,
  Navbar,
  NumResults,
  Search,
  WatchedMoviesList,
  WatchedSummary,
} from './components';
import { tempMovieData, tempWatchedData } from './data';
import MoviesList from './components/MoviesList';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
