const mongo = require('./mongo')
const userSchema = require('./model/user-schema')

const connectToMongoDb = async () => {
    await mongo().then( async(mongoose) => {
        try{
            console.log('Connected to mongodb!')
            
            //delete
            //there are deleteOne , deleteMany also

            await userSchema.deleteOne({
                email: 'testDelete@gmail.com',
            })
            

            
        } finally{
            mongoose.connection.close()
        }

    })
}

connectToMongoDb()