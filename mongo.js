const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

const connectionUrl = process.env.CONNECTION_URL

module.exports = async () => {
    await mongoose.connect(connectionUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    return mongoose
}