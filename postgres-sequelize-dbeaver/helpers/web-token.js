const jwt = require('jsonwebtoken')

function generateToken(payload) {
  return jwt.sign(payload, 'key')
}

function verifyToken(token) {
  return jwt.verify(token, 'key')
}

module.exports = { generateToken, verifyToken }