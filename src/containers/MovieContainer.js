import { connect } from 'react-redux'
import MovieComponent from '../components/MovieComponent'

//Actions
import { getMoviesAction, addMovieAction, getSucceededAction, getFailedAction } from '../actions'

const mapStateProps = state => {
  console.log(state);
  
  return {
    movies: state.movieReducers.movies
  }
}
const mapDispatchProps = dispatch => {
  return {
    onGetMovies: () => {
      dispatch(getMoviesAction())
    },
    onAddMovie: (data) => {
      dispatch(addMovieAction(data))
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(MovieComponent)