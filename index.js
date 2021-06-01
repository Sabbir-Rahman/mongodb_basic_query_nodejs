const mongo = require('./mongo')
const userSchema = require('./model/user-schema')

const connectToMongoDb = async () => {
    await mongo().then( async(mongoose) => {
        try{
            console.log('Connected to mongodb!')
            
            //array adding and removing element
            const newName = "Ok add"

            await userSchema.findOneAndUpdate({
                email: 'test@gmail.com'
            },{
                //$push for add new element $addToSet for add if new element not exist $pull for delete the element of the array
                $pull: {
                    nameHistory: newName
                }

            })

            
        } finally{
            mongoose.connection.close()
        }

    })
}

connectToMongoDb()