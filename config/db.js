const mongoose = require('mongoose')

const dbConnection = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(dbConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`DB Connection Successful`)
    } catch (error) {
        console.log(`DB connection Failed`)
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB