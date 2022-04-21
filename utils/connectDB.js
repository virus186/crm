const mongoose = require('mongoose')

async function connectDB () {
    const MONGO_URI = 'mongodb://127.0.0.1:27017/asa_crm'
    try {
        mongoose.connect(MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('DB Connected Successfully')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB