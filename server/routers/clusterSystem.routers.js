const { getAllClusterSystem, createClusterSystem } = require('../controllers/clusterSystem.controllers')

const clusterSystemRouters = require('express-promise-router')()

clusterSystemRouters.route('/')
    .get(getAllClusterSystem)
    .post(createClusterSystem)

module.exports = {
    clusterSystemRouters
}