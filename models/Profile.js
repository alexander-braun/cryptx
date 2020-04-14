const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new mongoose.Schema({
    user: {
        //Create Reference to the associated usermodel
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    picture : {
        type: String
    }
})

const Profile = mongoose.model('profile', ProfileSchema)

module.exports = Profile 