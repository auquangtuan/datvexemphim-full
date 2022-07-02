const express = require('express')
const { cinemaSystemRouters } = require('./cinemaSystem.routers')

const rootRouter = express.Router()

rootRouter.use('/cinemaSystem', cinemaSystemRouters)

module.exports = {
    rootRouter
}