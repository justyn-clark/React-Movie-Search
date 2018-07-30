import React from 'react';
import Movie from '../Movie';
import PropTypes from 'prop-types';
import Wrapper from '../../../components/Layouts/styled/Wrapper';

function MovieList ({ movies }) {
  return (
    <Wrapper
      backgroundColor="white"
      padding="15px"
      margin="30px 0">
      {movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </Wrapper>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;