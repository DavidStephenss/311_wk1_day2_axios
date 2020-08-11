// import axios here
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
const api_key = process.env.API_KEY
const environment = process.env.ENV
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  return axios(url)
  // code here
}
discoverMovie()


const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return axios(url).then((notPoop) => notPoop.data)
  // code here
}

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  return axios(url).then(response => response.data).catch(error => error.response.status) 
  // code here
}


if(environment === "development"){
  module.exports = {
    discoverMovie,
    getMovieById,
    getMovieByIdFailure
  }
}
