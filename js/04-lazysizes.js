/*
 * Библиотека lazysizes
 * - feature detection
 */



if('loading', HTMLImageElement.prototype) {
    console.log(`Браузер поддерживает ленивую загрузку`)

    const lazyImages = document.querySelectorAll('img[loading="lazy"]')
     
    lazyImages.forEach(img => 
        img.src = img.dataset.src)
} else {
    console.log(`Браузер НЕ поддерживает ленивую загрузку`)
    const script = document.createElement('script')
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
    script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==" 
    script.crossorigin = "anonymous"
    script.referrerpolicy = "no-referrer"

    document.body.appendChild(script)
}

const lazyImages = document.querySelectorAll('img[data-src]')
//  console.log(lazyImages)

 lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoad, {once: true})
 })

 function onImageLoad (evt) {
    //  console.log(evt.target)
     evt.target.classList.add('appear')
 }