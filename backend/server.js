//get request
// app.get('/',(req,res) => {
//   res.json({mssg : "Welcome to the app"})
// })

//listen for request
// app.listen(process.env.PORT,() => {
//   console.log("Listening to port ",process.env.PORT)
// })


require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())


//cors
const cors = require('cors');
app.use(cors());




app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 