const { Op } = require("sequelize")
const { ClusterSystem , CinemaDoor} = require("../models")

const getAllClusterSystem = async (req, res) => {
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.offset)
    const {clusterName} = req.query
    if(clusterName){
        const findCluserbyName = await ClusterSystem.findAll({
            where : {
                clusterName : {
                    [Op.like] : `%${clusterName}%`,
                }
            }
        })
        return res.status(200).send(findCluserbyName)
    }else if((limit >= 1 ) & (offset >= 0)){
        const findAllClusterSystems = await ClusterSystem.findAndCountAll({
            limit : limit,
            offset : limit * offset,
        })
        return res.status(200).send(findAllClusterSystems)
    }else {
        const findAllClusterSystem = await ClusterSystem.findAll()
        return res.status(200).send(findAllClusterSystem)
    }
}
const createClusterSystem = async (req, res) => {
    const {clusterCode ,clusterName, clusterAddress, clusterList} = req.body;
    const createCluster = await ClusterSystem.create({clusterCode ,clusterName, clusterAddress, clusterList})
    return res.status(201).send(createCluster)
}
const getOneClusterSystem = async (req,res) => {
    const {id} = req.params;
    const findOneCluster = await ClusterSystem.findOne({
        where : {
            id
        },
        include : [
            {
                model : CinemaDoor
            }
        ]
    })
    return res.status(200).send(findOneCluster)
}
const updateClusterSystem = async (req, res) => {
    const { id } = req.params
    const { clusterCode, clusterName, clusterAddress, clusterList } = req.body
    const updateCluster = await ClusterSystem.findOne({
        where: {
            id
        }
    })
    updateCluster.clusterCode = clusterCode
    updateCluster.clusterName = clusterName
    updateCluster.clusterAddress = clusterAddress
    updateCluster.clusterList = clusterList
    await updateCluster.save()
    return res.status(200).send(updateCluster)

}
const deleteClusterSystem = async (req, res) => {
    const { id } = req.params

    await ClusterSystem.destroy({
        where: {
            id
        }
    })
    return res.status(201).send("Xóa Thành Công")

}
module.exports = {
    getAllClusterSystem,
    createClusterSystem,
    getOneClusterSystem,
    updateClusterSystem,
    deleteClusterSystem
}