let cross = document.querySelector(".cross")

document.querySelectorAll('.js-scale-img').forEach(function(el){
    el.addEventListener('click', function(){
        el.classList.add('active')
        cross.classList.add('active')
        cross.addEventListener('click', function(){
            el.classList.remove('active')
            cross.classList.remove('active')
        })
    })
})