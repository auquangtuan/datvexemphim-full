const express = require('express')
const { cinemaDoorRouters } = require('./cinemaDoor.routers')
const { cinemaSeetRouters } = require('./cinemaSeet.routers')
const { cinemaSystemRouters } = require('./cinemaSystem.routers')
const { clusterSystemRouters } = require('./clusterSystem.routers')
const { movieRouters } = require('./movie.routers')

const rootRouter = express.Router()

rootRouter.use('/cinemaSystem', cinemaSystemRouters)
rootRouter.use('/clusterSystem', clusterSystemRouters)
rootRouter.use('/cinemaDoor', cinemaDoorRouters)
rootRouter.use('/cinemaSeet', cinemaSeetRouters)
rootRouter.use('/movie', movieRouters)

module.exports = {
    rootRouter
}