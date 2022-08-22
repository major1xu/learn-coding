class App {
  constructor () {
    this.meals = []
    document.getElementById('form-entry').addEventListener('submit', (event) => {
      event.preventDefault()
      this.addMeal({
        id: Date.now(), // faux id
        title: document.getElementById('title').value,
        calories: parseInt(document.getElementById('calories').value)
      })
    })
  }
  async init () {
    try {
      this.meals = await this.request('GET', '/meals')
      this.render()
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }
  request (method, url, data = null) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = () => {
      if (xhr.status === 200) {
        return resolve(JSON.parse(xhr.responseText || '{}'))
      } else {
        return reject(new Error(`Request failed with status ${xhr.status}`))
      }
    }
    if (data) {
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
  })
}
async addMeal (data) {
  try {
    const meal = await this.request('POST', '/meals', data)
    document.getElementById('meals').appendChild(this.createMealElement(meal))
    this.meals.push(meal)
    this.updateTotalCalories()
  } catch (err) {
    alert(`Error: ${err.message}`)
  }
}
async deleteMeal (id) {
  try {
    await this.request('DELETE', `/meals/${id}`)
    let index = this.meals.map(o => o.id).indexOf(id)
    this.meals.splice(index, 1)
    this.updateTotalCalories()
  } catch (err) {
    alert(`Error: ${err.message}`)
  }
}
  updateTotalCalories () {
    let elTotal = document.getElementById('total')
    elTotal.textContent = this.meals.reduce((acc, o) => acc + o.calories, 0).toLocaleString()
  }
  createMealElement ({ id, title, calories }) {
    let el = document.createElement('li')
    el.className = 'list-group-item d-flex justify-content-between align-items-center'
    el.innerHTML = `
      <div>
        <a href="#" class="remove">&times;</a>
        <span class="title">${title}</span>
      </div>
      <span class="calories badge badge-primary badge-pill">${calories}</span>
    `
    // when the 'x' delete link is clicked
    el.querySelector('a').addEventListener('click', (event) => {
      event.preventDefault()
      this.deleteMeal(id)
      el.remove()
    })
    return el
  }
  render () {
    let fragment = document.createDocumentFragment()
    for (let meal of this.meals) {
      fragment.appendChild(this.createMealElement(meal))
    }
    let el = document.getElementById('meals')
    while (el.firstChild) {
      el.removeChild(el.firstChild) // empty the <div id="meals" />
    }
    el.appendChild(fragment)
    this.updateTotalCalories()
  }
}

let app = new App()
app.init()
