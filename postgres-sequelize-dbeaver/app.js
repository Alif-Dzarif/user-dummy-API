const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('User Dummy Server Running As Well 👌')
})

app.listen(port, () => {
  console.log(`User Dummy Server running on port ${port}`);
})