const refs = {
    progress: document.querySelector('.progress'),
    sections: document.querySelector('.sections'),
    wrapper: document.querySelector('.wrapper')
}
console.log(refs.sections)
console.log(refs.progress)

refs.progress.value = refs.wrapper.clientHeight
refs.progress.max = refs.wrapper.scrollHeight

const handleScroll = (e) => {
    console.log('scroll')
    refs.progress.value = e.target.scrollTop + refs.wrapper.clientHeight
}

function throttle(callback, delay) {
    let id = 0;
    return function(e) {
        if(id){
            return;
        }

       id = setTimeout(() => {
        callback(e);
        id = 0;
       }, delay);
    }
}


function debounce(callback, delay) {
    let id = 0;
    return function(e) {
        if(id)clearTimeout(id);
        
       id = setTimeout(() => {
        callback(e);
        id = 0;
       }, delay);
    }
}

// refs.wrapper.addEventListener('scroll', throttle(handleScroll, 300))
refs.wrapper.addEventListener('scroll', debounce(handleScroll, 300))