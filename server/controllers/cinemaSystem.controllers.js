const { Op } = require('sequelize')
const { CinemaSystem, ClusterSystem } = require('../models')

const getAllCinemaSystem = async (req, res) => {
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.offset)
    const { systemName } = req.query
    if (systemName) {
        const findCinemabyName = await CinemaSystem.findAll({
            where: {
                systemName: {
                    [Op.like]: `%${systemName}%`,
                }
            }
        })
        return res.status(200).send(findCinemabyName)
    } else if((limit >= 1 ) & (offset >= 0)){
        const findAllCinemaSystems = await CinemaSystem.findAndCountAll({
            limit : limit,
            offset : limit * offset,
            order: [
                ['id', 'ASC']
            ]
        })
        return res.status(200).send(findAllCinemaSystems)
    } else {
        const findAllCinemaSystem = await CinemaSystem.findAll()
        return res.status(200).send(findAllCinemaSystem)
    }
}
const getOneCinemaSystem = async (req, res) => {
    const { id } = req.params
    const oneCinema = await CinemaSystem.findOne({
        where: {
            id,
        },
        include : [{
            model : ClusterSystem
        }]
    })
    return res.status(200).send(oneCinema)
}
const createCinemaSystem = async (req, res) => {
    const {systemCode, systemName, systemAlias, systemLogo} = req.body
    const createCinemaSystem = await CinemaSystem.create({ systemCode, systemName, systemAlias, systemLogo })
    return res.status(201).send(createCinemaSystem)
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
    return res.status(200).send(updateCinema)

}
const deleteCinemaSystem = async (req, res) => {
    const { id } = req.params

    await CinemaSystem.destroy({
        where: {
            id
        }
    })
    return res.status(201).send("Xóa Thành Công")

}
module.exports = {
    getAllCinemaSystem,
    createCinemaSystem,
    getOneCinemaSystem,
    updateCinemaSystem,
    deleteCinemaSystem
}