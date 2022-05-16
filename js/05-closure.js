const list = document.querySelector('.list')
const liItems = document.querySelectorAll('li')

 
const createCar = function(brand) {
    const typeOfCar  = function(type){
        console.log(`${brand} начал выпуск новой модели ${type}`)
    }
    return typeOfCar
}

const createListItem = function (text) {
    const li = document.createElement('li')
    li.textContent = text
    list.append(li)
    const bmw = createCar('BMW')
    bmw(text)
}

createListItem('X6')
createListItem('X1')
createListItem('M5')
   
