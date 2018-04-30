import { ADD_MOVIE, FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEEDED  } from './actionTypes'


export const getMoviesAction = sort => {
  return {
    type: FETCH_MOVIES,
    sort
  }
}
 export const addMovieAction = newMovie => {
   return {
     type: ADD_MOVIE,
     newMovie
   }
 } 


 //Action sent by redux saga
 export const getSucceededAction = recievedMovies => {
   return {
     type: FETCH_SUCCEEDED,
     recievedMovies
   }
 }

 export const getFailedAction = error => {
   return {
     type: FETCH_FAILED,
     error
   }
 }