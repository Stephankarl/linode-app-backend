const express = require('express')
const router = express.Router()

const Contract = require('../models/Contract')

router.get('/', async (req, res) => {
    const contracts = await Contract.find()
    res.status(200).json({
        success: true,
        data: contracts
    })
})

router.post('/', async (req, res) => {
    const contract = await Contract.create(req.body)
    res.status(201).json({
        success: true,
        data: contract
    })
})

router.post('/:id', async (req, res) => {
    const { amount } = req.body
    const query = { _id: req.params.id }
    const update = {
        $push: {
            'paid.payment': { amount, hell: "yes" }
        }
    }
    const result = await Contract.updateOne(query, update)
    res.status(201).json({
        success: true,
        data: result
    })
})

module.exports = router