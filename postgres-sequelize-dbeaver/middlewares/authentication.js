const { verifyToken } = require('../helpers/web-token')
const { User } = require('../models')

function userAuthentication(req, res, next) {
  const { token } = req.headers;

  if(!token) throw { name: 'AUTH_ISSUE' }
  else {
    const { id } = verifyToken(token)

    const data = User.findByPk(id)
    if(!data) throw { name: 'DATA_NOT_FOUND' }
    else {
      req.userData = data
      next()
    }
  }
} 

module.exports = userAuthentication