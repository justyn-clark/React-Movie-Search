import React from 'react';
import PropTypes from 'prop-types';
import TheatreTab from './TheatreTab';
import Flexbox from '../../../components/Layouts/styled/Flexbox';
import FlexItem from '../../../components/Layouts/styled/FlexItem';

function TheatreTabs ({ theatres, activeTab, handleTabClick }) {
  return theatres.length > 0 && (
    <Flexbox>
      {theatres.map((theatre) => <TheatreTab 
                                    key={theatre.id} 
                                    data-name={theatre.name} 
                                    active={theatre.name === activeTab} 
                                    onClick={handleTabClick}>
                                      {theatre.name}
                                  </TheatreTab>)}
    </Flexbox>
  );
}

TheatreTabs.propTypes = {
  theatres: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired
};

export default TheatreTabs;