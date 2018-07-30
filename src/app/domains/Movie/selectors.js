import { createSelector } from 'reselect';

const theatresSelector = (state) => state.theatre.theatres;

const activeTheatreTabSelector = (state) => state.theatre.activeTab;

const searchTextSelector = (state) => state.search;

const selectedTheatreMoviesSelector = createSelector(
  theatresSelector,
  activeTheatreTabSelector,
  (theatres, activeTab) => {
    if(!theatres.length) return [];

    return theatres.filter((theatre) => theatre.name === activeTab)[0].movies;
  }
);

const movieSearchResultsSelector = createSelector(
  searchTextSelector,
  selectedTheatreMoviesSelector,
  (text, movies) => movies.filter((movie) => movie.title.toLowerCase().includes(text.trim().toLowerCase()))
);

export const moviesSelector = createSelector(
  selectedTheatreMoviesSelector,
  movieSearchResultsSelector,
  searchTextSelector,
  (theatreMovies, filteredMovies, searchText) => {
    if(searchText.trim().length) return filteredMovies;

    return theatreMovies;
  }
);