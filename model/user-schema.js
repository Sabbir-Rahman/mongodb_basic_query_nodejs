const mongoose = require('mongoose')


//this is for replicating required
const requiredString = {
    type: String,
    required: true
}

const userSchema = mongoose.Schema({
    email: requiredString,
    username: requiredString,
    password: requiredString,
    messages: Number,

})

module.exports = mongoose.model('users', userSchema)