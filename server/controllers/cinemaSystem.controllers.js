const { CinemaSystem } = require('../models')

const getAllCinemaSystem = async (req, res) => {
    const findAllCinemaSystem = await CinemaSystem.findAll()
    res.status(200).send(findAllCinemaSystem)
}
const getOneCinemaSystem = async (req, res) => {
    const { id } = req.params
    const oneCinema = await CinemaSystem.findOne({
        where: {
            id,
        }
    })
    res.status(200).send(oneCinema)
}
const createCinemaSystem = async (req, res) => {
    const { systemCode, systemName, systemAlias, systemLogo } = req.body;
    const createCinemaSystem = await CinemaSystem.create({ systemCode, systemName, systemAlias, systemLogo })
    res.status(201).send(createCinemaSystem)
}
const updateCinemaSystem = async (req, res) => {
    const { id } = req.params
    const { systemCode, systemName, systemAlias, systemLogo } = req.body
    const updateCinema = await CinemaSystem.findOne({
        where: {
            id
        }
    })
    updateCinema.systemCode = systemCode
    updateCinema.systemName = systemName
    updateCinema.systemAlias = systemAlias
    updateCinema.systemLogo = systemLogo
    await updateCinema.save()
    res.status(200).send(updateCinema)

}
const deleteCinemaSystem = async (req, res) => {
    const { id } = req.params

    await CinemaSystem.destroy({
        where: {
            id
        }
    })
    res.status(201).send("Xóa Thành Công")

}
module.exports = {
    getAllCinemaSystem,
    createCinemaSystem,
    getOneCinemaSystem,
    updateCinemaSystem,
    deleteCinemaSystem
}