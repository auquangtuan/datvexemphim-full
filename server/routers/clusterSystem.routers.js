const { getAllClusterSystem, createClusterSystem, getOneClusterSystem, updateClusterSystem, deleteClusterSystem } = require('../controllers/clusterSystem.controllers')

const clusterSystemRouters = require('express-promise-router')()

clusterSystemRouters.route('/')
    .get(getAllClusterSystem)
    .post(createClusterSystem)
clusterSystemRouters.route('/:id')
    .get(getOneClusterSystem)
    .put(updateClusterSystem)
    .delete(deleteClusterSystem)
module.exports = {
    clusterSystemRouters
}