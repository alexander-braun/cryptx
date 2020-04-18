const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PresetSchema = new mongoose.Schema({
    user: {
        //Create Reference to the associated usermodel
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    preset: {
        type: Object,
        required: true
    },
    date: {
        type: String,
        default: Date.now()
    }
})

const Preset = mongoose.model('preset', PresetSchema)

module.exports = Preset