const { Op } = require('sequelize')
const { CinemaSeets, CinemaDoor } = require('../models')

const getAllCinemaSeet = async (req, res) => {
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.offset)
    const { systemName } = req.query
    if (systemName) {
        const findCinemabyName = await CinemaSeets.findAll({
            where: {
                systemName: {
                    [Op.like]: `%${systemName}%`,
                }
            }
        })
        return res.status(200).send(findCinemabyName)
    } else if((limit >= 1 ) & (offset >= 0)){
        const findAllCinemaSeets = await CinemaSeets.findAndCountAll({
            limit : limit,
            offset : limit * offset,
            order: [
                ['id', 'ASC']
            ]
        })
        return res.status(200).send(findAllCinemaSeets)
    } else {
        const findAllCinemaSeet = await CinemaSeets.findAll()
        return res.status(200).send(findAllCinemaSeet)
    }
}
const getOneCinemaSeet = async (req, res) => {
    const { id } = req.params
    const oneCinema = await CinemaSeets.findOne({
        where: {
            id,
        },
        include : [{
            model : CinemaDoor
        }]
    })
    return res.status(200).send(oneCinema)
}
const createCinemaSeet = async (req, res) => {
    const {seetCode, seetName, typeOfChair, beLongsDoor} = req.body
    const createCinemaSeet = await CinemaSeets.create({seetCode, seetName, typeOfChair, beLongsDoor})
    return res.status(201).send(createCinemaSeet)
}

const updateCinemaSeet = async (req, res) => {
    const { id } = req.params
    const {seetCode,seetName, typeOfChair, beLongsDoor , booked, oderer} = req.body
    const updateCinema = await CinemaSeets.findOne({
        where: {
            id
        }
    })
    if(booked && oderer) {
        updateCinema.booked = booked
        updateCinema.oderer = oderer
    } else {
        updateCinema.seetCode = seetCode
        updateCinema.seetName = seetName
        updateCinema.typeOfChair = typeOfChair
        updateCinema.beLongsDoor = beLongsDoor
    }
    await updateCinema.save()
    return res.status(201).send(updateCinema)

}
const deleteCinemaSeet = async (req, res) => {
    const { id } = req.params

    await CinemaSeets.destroy({
        where: {
            id
        }
    })
    return res.status(201).send("Xóa Thành Công")

}
module.exports = {
    getAllCinemaSeet,
    createCinemaSeet,
    getOneCinemaSeet,
    updateCinemaSeet,
    deleteCinemaSeet,
}