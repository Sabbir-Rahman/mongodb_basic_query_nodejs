const mongo = require('./mongo')
const userSchema = require('./model/user-schema')

const connectToMongoDb = async () => {
    await mongo().then( async(mongoose) => {
        try{
            console.log('Connected to mongodb!')
            
            //Add user
            // const user = {
            //     email: 'test@gmail.com',
            //     username: 'Bob',
            //     password: '123456'
            // }
            // await new userSchema(user).save()

            //find all user
            const result = await userSchema.find()

            //find user with user name
            //findOne will return one that first match it is faster than the find
            const result = await userSchema.find({
                username: 'Sabbir'
            })

            console.log('Result:', result)


            
        } finally{
            mongoose.connection.close()
        }

    })
}

connectToMongoDb()