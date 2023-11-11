const bcrypt = require('bcrypt')
const { generateToken } = require('../helpers/web-token')

const { User } = require('../models')

class Controller {
  static async register (req, res, next) {
    try {
      const { firstName, lastName, age, gender, email, password } = req.body

      if(!firstName || !age || !gender || !email || !password) throw { name: 'FORM_NULL' }

      const data =  await User.create({ firstName, lastName, age, gender, email, password })

      const user = {
        id: data.id,
        name: data.firstName + " " + data.lastName,
        age: data.age,
        gender: data.gender,
        email: data.email 
      }

      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }

  static async login (req, res, next) {
    try {
      const { email, password } = req.body

      if(!email || !password) throw { name: 'FORM_NULL' }

      const data = await User.findOne({ where: { email } })

      if(!data) throw { name: 'DATA_NOT_FOUND' }

      const pass_check = bcrypt.compare(password, data.password)

      if(!pass_check) throw { name: 'WRONG_PASSWORD' }
      else {
        const payload = {
          id: data.id
        }
        const token = generateToken(payload)
        
        res.status(200).json({ token })
      }
    } catch (error) {
      next(error)
    }
  }

  static async getAll (req, res, next) {
    try {
      const data = await User.findAll({
        attributes: { exclude: ['password'] }
      })

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async getOne (req, res, next) {
    try {
      const { id } = req.params

      const data = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } })

      if(!data) throw { name: 'DATA_NOT_FOUND' }
      else res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async edit (req, res, next) {
    try {
      const { id } = req.params
      const { firstName, lastName, age, gender } = req.body

      const data = await User.findOne({ where: { id } })

      if(!data) throw { name: 'DATA_NOT_FOUND' }
      else {
        let option = {}

        if(firstName) option.firstName = firstName
        if(lastName) option.lastName = lastName
        if(age) option.age = age
        if(gender) option.gender = gender

        const user = await User.update(option, { where: { id } })

        res.status(200).json({ message: `user with id ${id} updated` })
      }
    } catch (error) {
      next(error)
    }
  }

  static async remove (req, res, next) {
    try {
      const { id } = req.params

      const data = await User.findOne({ where: { id } })

      if(!data) throw { name: 'DATA_NOT_FOUND' }
      else {
        const user = await User.destroy({ where: { id }, truncate: true })

        res.status(200).json({ message: `user with id ${id} deleted` })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller