const mongo = require('./mongo')
const userSchema = require('./model/user-schema')

const connectToMongoDb = async () => {
    await mongo().then( async(mongoose) => {
        try{
            console.log('Connected to mongodb!')
            

            //find sort and limit
            const result = await userSchema.find({}).sort({
                messages: 1,
            }).limit(3)

            console.log('RESULTS:',result)
            
        } finally{
            mongoose.connection.close()
        }

    })
}

connectToMongoDb()