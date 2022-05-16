/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */



/*
 * Mousemove и throttle
 */
 const coordsOutputRef = document.querySelector('.js-coords')
 let mouseMoveCbInvocationCounter = 0;

 window.addEventListener('mousemove', _.debounce(onMouseMove, 1500))

 function onMouseMove(event) {
     mouseMoveCbInvocationCounter += 1;
     coordsOutputRef.textContent = `
     Количество вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
     X: ${event.clientX},
     Y: ${event.clientY}
     `
 }

 window.addEventListener('keydown', reset)

 function reset(evt) {
     if(evt.code ===  'Escape') {
        mouseMoveCbInvocationCounter = 0;
        coordsOutputRef.textContent = `
     Количество вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
     X: 0,
     Y: 0
     `
     }
 }


/*
 * Input и debounce
 */
 

const inputRef = document.querySelector('.js-input')
const outputRef = document.querySelector('.js-output')
let inputCbInvocationCounter = 0;
 
inputRef.addEventListener('input', _.debounce(onInputChange, 3001))

function onInputChange(e) {
    inputCbInvocationCounter += 1;

    outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${e.target.value}`
}

