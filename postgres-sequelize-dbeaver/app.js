const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const errorHandler = require('./middlewares/error-handler')
const router = require('./routers')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`User Dummy Server running on port ${port}`);
})