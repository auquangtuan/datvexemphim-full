const { getAllCinemaSeet, createCinemaSeet, getOneCinemaSeet, updateCinemaSeet, deleteCinemaSeet } = require('../controllers/cinemaSeet.controllers')

const cinemaSeetRouters = require('express-promise-router')()

cinemaSeetRouters.route('/')
    .get(getAllCinemaSeet)
    .post(createCinemaSeet)

cinemaSeetRouters.route('/:id')
    .get(getOneCinemaSeet)
    .put(updateCinemaSeet)
    .delete(deleteCinemaSeet)
module.exports = {
    cinemaSeetRouters
}