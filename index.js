const mongo = require('./mongo')
const userSchema = require('./model/user-schema')

const connectToMongoDb = async () => {
    await mongo().then( async(mongoose) => {
        try{
            console.log('Connected to mongodb!')
            

            //update the data takes two parameter whose username is Sabbir will become Rahman
            //update method is depreciated with updateOne, updateMany or bulkWrite
            await userSchema.updateOne(
                {
                    username: 'Sabbir',
                },
                {
                    username:'Rahman',
                }
            )

            

            
        } finally{
            mongoose.connection.close()
        }

    })
}

connectToMongoDb()