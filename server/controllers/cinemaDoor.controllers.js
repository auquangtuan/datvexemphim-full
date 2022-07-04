const { Op } = require('sequelize')
const { CinemaDoor, ClusterSystem, CinemaSeets } = require('../models')

const getAllCinemaDoor = async (req, res) => {
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.offset)
    const { systemName } = req.query
    if (systemName) {
        const findCinemabyName = await CinemaDoor.findAll({
            where: {
                systemName: {
                    [Op.like]: `%${systemName}%`,
                }
            }
        })
        return res.status(200).send(findCinemabyName)
    } else if ((limit >= 1) & (offset >= 0)) {
        const findAllCinemaDoors = await CinemaDoor.findAndCountAll({
            limit: limit,
            offset: limit * offset,
            order: [
                ['id', 'ASC']
            ]
        })
        return res.status(200).send(findAllCinemaDoors)
    } else {
        const findAllCinemaDoor = await CinemaDoor.findAll()
        return res.status(200).send(findAllCinemaDoor)
    }
}
const getOneCinemaDoor = async (req, res) => {
    const { id } = req.params
    const oneCinema = await CinemaDoor.findOne({
        where: {
            id,
        },
        include: [
            {
                model: ClusterSystem
            },
            {
                model : CinemaSeets
            }
        ]
    })
    return res.status(200).send(oneCinema)
}
const createCinemaDoor = async (req, res) => {
    const { theaterCode, theaterName, beLongCluster } = req.body
    const createCinemaDoor = await CinemaDoor.create({ theaterCode, theaterName, beLongCluster })
    return res.status(201).send(createCinemaDoor)
}

const updateCinemaDoor = async (req, res) => {
    const { id } = req.params
    const { theaterCode, theaterName, beLongCluster } = req.body
    const updateCinema = await CinemaDoor.findOne({
        where: {
            id
        }
    })
    updateCinema.theaterCode = theaterCode
    updateCinema.theaterName = theaterName
    updateCinema.beLongCluster = beLongCluster
    await updateCinema.save()
    return res.status(200).send(updateCinema)

}
const deleteCinemaDoor = async (req, res) => {
    const { id } = req.params

    await CinemaDoor.destroy({
        where: {
            id
        }
    })
    return res.status(201).send("Xóa Thành Công")

}
module.exports = {
    getAllCinemaDoor,
    createCinemaDoor,
    getOneCinemaDoor,
    updateCinemaDoor,
    deleteCinemaDoor
}