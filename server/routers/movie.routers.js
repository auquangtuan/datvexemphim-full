const { getAllMovies } = require('../controllers/movie.controllers')

const movieRouters = require('express-promise-router')()

movieRouters.route('/')
    .get(getAllMovies)
movieRouters.route('/:id')

module.exports = {
    movieRouters
}