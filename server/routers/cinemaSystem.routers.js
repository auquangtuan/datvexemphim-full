const { getAllCinemaSystem, createCinemaSystem, getOneCinemaSystem, updateCinemaSystem, deleteCinemaSystem } = require('../controllers/cinemaSystem.controllers')

const cinemaSystemRouters = require('express-promise-router')()

cinemaSystemRouters.route('/')
    .get(getAllCinemaSystem)
    .post(createCinemaSystem)
cinemaSystemRouters.route('/:id')
    .get(getOneCinemaSystem)
    .put(updateCinemaSystem)
    .delete(deleteCinemaSystem)

module.exports = {
    cinemaSystemRouters
}