const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

// store in memory
let meals = []

app.get('/meals', (req, res) => {
  return res.send(meals)
})

app.post('/meals', (req, res) => {
  let meal = req.body
  meal.id = Date.now()
  meals.push(meal)
  return res.send(meal)
})

app.delete('/meals/:id', (req, res) => {
  let id = parseInt(req.params.id)
  const index = meals.map(o => o.id).indexOf(id)
  if (index !== -1) {
    meals.splice(index, 1)
  }
  return res.send()
})

app.listen(8080, () => {
  console.log('App listening on port 8080!')
})
