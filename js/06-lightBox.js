


const instance = basicLightbox.create(
    `
   <div class="modal">
       <h1>Dynamic Content</h1>
       <p>
           Your first lightbox with just a few lines of code.
           Yes, it's really that simple.
       </p>
       <img src = "" />
       <button>Close</button>
   </div>
   `)

   const refs = {
    button1: document.querySelector('#button-1'),
    button2: document.querySelector('#button-2'),
    image: instance.element().querySelector('img'),
    closeBtn: instance.element().querySelector('button')
}


console.log(instance) 

/*
 *   close: ƒ (e)
 *   element: ƒ ()
 *   show: ƒ (e)
 *   visible: ƒ ()
 */ 

function onButton1Click() {
    instance.show()
    refs.image.src = 'https://picsum.photos/536/354'
}
function onButton2Click() {
    instance.show()
    refs.image.src = 'https://picsum.photos/536/354'
}
function onCloseButton() {
    instance.close()
}

function onDoubleClick() {
    console.log('zoom')
}


 refs.button1.addEventListener('click',onButton1Click)
 refs.button2.addEventListener('click',onButton2Click)
 refs.closeBtn.addEventListener('click',onCloseButton)
 refs.image.addEventListener('click', instance.close)
 refs.image.addEventListener('dblclick',onDoubleClick)
