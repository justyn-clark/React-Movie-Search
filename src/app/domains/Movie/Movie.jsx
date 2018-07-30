import React from "react";
import PropTypes from "prop-types";
import Flexbox from "../../components/Layouts/styled/Flexbox";
import FlexItem from "../../components/Layouts/styled/FlexItem";
import Wrapper from "../../components/Layouts/styled/Wrapper";
import Small from '../../components/Text/styled/Small';

const MovieDetailsWrapper = Wrapper.extend`
  @media screen and (max-width: 767px) {
    margin: 15px 0;
  }
`;

const Rating = Small.extend`
  font-size: 65%;
`;

function Movie({ title, rating, poster, showtimes }) {
  return (
    <Flexbox>
      <FlexItem>
        <img src={poster} alt="" />
      </FlexItem>
      <FlexItem>
        <MovieDetailsWrapper margin="0 15px">
          <h1>{title} <Rating>({rating})</Rating></h1>
          <p>{showtimes.join(" | ")}</p>
        </MovieDetailsWrapper>
      </FlexItem>
    </Flexbox>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  showtimes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
