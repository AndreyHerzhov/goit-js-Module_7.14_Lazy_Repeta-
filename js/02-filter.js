const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
  ];

  const refs = {
    input: document.querySelector('#filter'),
    list: document.querySelector('.js-list')
  }
  
  /*
   * 1. Рендерим разметку элементов списка
   * 2. Слушаем изменение фильтра
   * 3. Фильтруем данные и рендерим новые элементы
   */
  
  // -------------- render 1-st variant using `document.createElement('li')`
 
  // const createNewList = function (elements) {
  //   const li = document.createElement('li')
  //   li.textContent = elements.label
  //   refs.list.append(li)
  // }

  //  tech.map(el => createNewList(el))

  //---------------- render 2-nd variant 

 const createList = function (elements) {
   return elements.map(el => `<li>${el.label}</li>`).join('')
 }
  const newMarkUp = createList(tech)

refs.list.innerHTML = newMarkUp

refs.input.addEventListener('input', _.throttle(filterList,3000))

function filterList(evt) {
  const filter = evt.target.value
  console.log(evt.target.value)
  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter))

  const listItemsMarkup = createList(filteredItems)
  refs.list.innerHTML = listItemsMarkup
  console.log(listItemsMarkup)
}