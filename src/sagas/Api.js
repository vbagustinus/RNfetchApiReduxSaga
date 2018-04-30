import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/posts'

function* getMoviesFromApi() {
  const response = yield axios.get(url)
  // const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : []

  let movies = []
  if(response.status === 200) {
    response.data.forEach((data, i) => {
      let obj = {
        name: data.title,
        releaseYear: data.body
      }
      movies.push(obj)
    })
  } else {
    alert('ERROR')
  }
  console.log('APA',movies)
  return movies
}

export const API = {
  getMoviesFromApi
}