const { getAllCinemaDoor,getOneCinemaDoor,createCinemaDoor,updateCinemaDoor,deleteCinemaDoor } = require('../controllers/cinemaDoor.controllers')

const cinemaDoorRouters = require('express-promise-router')()

cinemaDoorRouters.route('/')
    .get(getAllCinemaDoor)
    .post(createCinemaDoor)
cinemaDoorRouters.route('/:id')
    .get(getOneCinemaDoor)
    .put(updateCinemaDoor)
    .delete(deleteCinemaDoor)
module.exports = {
    cinemaDoorRouters
}