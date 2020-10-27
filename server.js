const express = require("express")
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 1234
const dotenv =  require("dotenv")
dotenv.config()
require("./db")

app.use(cors())
app.use(express.json())
app.use(require('./routes/dataRoutes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`)
})