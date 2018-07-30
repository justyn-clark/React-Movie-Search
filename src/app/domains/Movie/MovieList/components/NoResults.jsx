import React from 'react';
import PropTypes from 'prop-types';

function NoResults ({ searchText }) {
  return <h1>No search results for "{searchText}".</h1>;
}

NoResults.defaultProps = {
  searchText: 'No results found.'
};

NoResults.propTypes = {
  searchText: PropTypes.string.isRequired
};

export default NoResults;