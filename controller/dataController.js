
const Vegetable = require('../models/vegetables')

const dataController = {
  // Index,
  index (req, res, next) {
    Vegetable.find({}, (err, foundVegetables) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.vegetables = foundVegetables
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.vegetable = deletedVegetable
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.isReadyToEat = req.body.isReadyToEat === 'on'
    Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVegetable) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = updatedVegetable
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.isReadyToEat = req.body.isReadyToEat === 'on'
    Vegetable.create(req.body, (err, createdVegetable) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.log = createdVegetable
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a vegetable with that ID'
        })
      } else {
        res.locals.data.log = foundVegetable
        next()
      }
    })
  }
}

module.exports = dataController
