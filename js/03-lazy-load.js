/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

 const lazyImages = document.querySelectorAll('img[loading="lazy"]')
//  console.log(lazyImages)

 lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoad, {once: true})
 })

 function onImageLoad (evt) {
     console.log(evt.target)
     evt.target.classList.add('appear')
 }
    