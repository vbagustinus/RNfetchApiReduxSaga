import { ADD_MOVIE, FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEEDED } from '../actions/actionTypes'

const movieReducers = ( movies= [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return {...movies, movies:action.recievedMovies }
    case FETCH_FAILED:
      return [] 
    case ADD_MOVIE:
      return [
        ...movies,
        action.newMovie
      ] 
    default:
      return movies
  }
} 

export default movieReducers