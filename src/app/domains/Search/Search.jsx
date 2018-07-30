import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../components/Buttons/CloseButton';
import Input from '../../components/Fields/styled/Input';
import Position from '../../components/Layouts/styled/Position';

const SearchInput = Input.extend`
  font-size: 20px;
`;

function Search ({ text, handleTextUpdate, reset }) {
  return (
    <Position position="relative">
      {text.trim().length > 0 && 
        <Position
          position="absolute"
          top="50%"
          right="5px"
          transform="translateY(-50%)">
          <CloseButton onClick={reset} />
        </Position>
      }
      <SearchInput 
        type="text"
        placeholder="Search movies..."
        value={text} 
        onChange={handleTextUpdate}
      />
    </Position>
  );
}

Search.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextUpdate: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default Search;