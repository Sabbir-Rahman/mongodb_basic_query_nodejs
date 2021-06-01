const mongo = require('./mongo')
const userSchema = require('./model/user-schema')

const connectToMongoDb = async () => {
    await mongo().then( async(mongoose) => {
        try{
            console.log('Connected to mongodb!')
            

            //can take three arguments first one is find second one is update third one is optional upsert it means if not find create a new entry
            const result = await userSchema.findOneAndUpdate({
                username: 'Sabbir'
            }, 
            {   
                email:'update@gmail.com',
                username:'Sabbir Updated',
                password: '127',

            },
            //if no natch find and upsert= true it will create a new entry
            {
                upsert: true,
                //for new: true it will return the updated query if console.log 
                new: true
            })

            console.log('Result:', result)
            

            
        } finally{
            mongoose.connection.close()
        }

    })
}

connectToMongoDb()