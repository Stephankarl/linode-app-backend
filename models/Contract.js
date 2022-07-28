const mongoose = require('mongoose')
const { Schema, model } = mongoose

const ContractSchema = new Schema({
    contractName: String,
    paid: {
        completed: { type: Boolean, default: false },
        payment: Array
    }
})

module.exports = new model('Contract', ContractSchema)