import React from "react";
import PropTypes from "prop-types";
import TransparentBackgroundButton from './styled/TransparentBackgroundButton';

function CloseButton({ onClick }) {
  return <TransparentBackgroundButton 
            fontSize="32px" 
            onClick={onClick}>
              &times;
         </TransparentBackgroundButton>
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CloseButton;
