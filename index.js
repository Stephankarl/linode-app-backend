require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./config/db')

//DB Connection
connectDB()

//Middleware
app.use(express.json())

//Routes
app.use('/api', require('./routes/contracts'))

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: 'This app is running.'
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))