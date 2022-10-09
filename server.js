require('dotenv').config()
// Require modules
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Vegetable = require('./models/vegetables')


// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/*Start Middleware */

app.use(methodOverride('_method'))

// INDEX --- READ --- GET
app.get('/vegetables', (req, res) => {
  Vegetable.find({}, (err, foundVegetables) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('vegetables/Index', {
        vegetables: foundVegetables
      })
    }
  })
})

// NEW (Not applicable in an api)
app.get('/vegetables/new', (req, res) => {
  res.render('vegetables/New')
})

// DELETE
app.delete('/vegetables/:id', (req, res) => {
  Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/vegetables')
    }
  })
})

// UPDATE
app.put('/vegetables/:id', (req, res) => {
  req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
  Vegetable.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedVegetable) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/vegetables/${updatedVegetable._id}`)
    }
  })
})

// CREATE
app.post('/vegetables', (req, res) =>{
  // req.body which contains all of our form Data we will get from the user
  req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
  Vegetable.create(req.body, (err, createdVegetable) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/vegetables/${createdVegetable._id}`)
      //res.send(createdVegetable)
    }
  })
})


// EDIT (not applicable in an api)
app.get('/vegetables/:id/edit', (req, res) => {
  Vegetable.findById(req.params.id, (err, foundVegetable) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('vegetables/Edit', {
       vegetable: foundVegetable
     })
    }
  })
 })

// SHOW ---- READ ---- GET
app.get('/vegetables/:id', (req, res) => {
 Vegetable.findById(req.params.id, (err, foundVegetable) => {
   if(err){
    console.error(err)
    res.status(400).send(err)
   } else {
    res.render('vegetables/Show', {
      vegetable: foundVegetable
    })
   }
 })
})



// Tell the app to listen on a port
app.listen(3033, () => {
    console.log('Listening on Port 3033')
})


