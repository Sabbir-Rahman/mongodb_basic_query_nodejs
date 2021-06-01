const mongo = require('./mongo')
const userSchema = require('./model/user-schema')

const connectToMongoDb = async () => {
    await mongo().then( async(mongoose) => {
        try{
            console.log('Connected to mongodb!')

            const user = {
                email: 'test@gmail.com',
                username: 'Sabbir Required',
                password: '123456'
            }
            await new userSchema(user).save()
            
        } finally{
            mongoose.connection.close()
        }

    })
}

connectToMongoDb()