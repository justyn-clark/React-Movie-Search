import { connect } from "react-redux";
import { compose, branch, renderComponent } from 'recompose';
import { moviesSelector } from '../selectors';
import MovieList from "./MovieList";
import NoResults from './components/NoResults';
import Spinner from '../../../components/Loaders/Spinner';

const CenteredSpinner = Spinner.extend`
  margin: 15px auto;
`;

const mapStateToProps = (state) => ({
  movies: moviesSelector(state),
  theatresLoading: state.theatre.fetching,
  searchText: state.search
});

const enhance = compose(
  connect(mapStateToProps),
  branch(
    ({ theatresLoading }) => theatresLoading,
    renderComponent(CenteredSpinner)
  ),
  branch(
    ({ searchText, movies }) => searchText.trim().length && !movies.length,
    renderComponent(NoResults)
  )
);

export default enhance(MovieList);