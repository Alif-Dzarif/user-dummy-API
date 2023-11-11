const router = require('express').Router()
const { register, login, getAll, getOne, edit, remove } = require('../controllers')
const userAuthentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
  res.send('User Dummy Server Running As Well 👌')
})

router.post('/register', register)
router.post('/login', login)

router.use(userAuthentication)
router.get('/user', getAll)
router.get('/user/:id', getOne)
router.put('/user/:id', edit)
router.delete('/user/:id', remove)

module.exports = router