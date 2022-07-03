const express = require('express')
const { cinemaSystemRouters } = require('./cinemaSystem.routers')
const { clusterSystemRouters } = require('./clusterSystem.routers')

const rootRouter = express.Router()

rootRouter.use('/cinemaSystem', cinemaSystemRouters)
rootRouter.use('/clusterSystem', clusterSystemRouters)

module.exports = {
    rootRouter
}