const {Movies} = require('../models')
const getAllMovies = async (req,res) => {
    const findAlls = await Movies.findAll()
    res.status(500).send(findAlls)
}

module.exports = {
    getAllMovies
}