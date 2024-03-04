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

let ava = document.querySelector('.AboutMeImg')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight
    let angleX = 40 * dx / window.innerWidth / 2
    let angleY = 40 * dy / window.innerHeight / 2
    ava.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`
})

let block = document.querySelector('.glitch')
const GLITCH_COUNT = 55
const GLITCH_TIME = 5
document.querySelector('.skills_failed').addEventListener('click', function() {
    block.style.display = 'block'
    for (let i = 0; i < GLITCH_COUNT; i++) {
        let glitchbox = document.createElement('div')
        glitchbox.className='glitch-box'
        glitchbox.style.top = Math.random()*100 + '%'
        glitchbox.style.left = Math.random()*100 + '%'
        let a = Math.random()*10
        let b = Math.random()*10
        glitchbox.style.width = Math.max(a, b) + '%'
        glitchbox.style.height = Math.min(a, b) + '%'
        glitchbox.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        block.appendChild(glitchbox)
        glitchbox.style.opacity = '0.85'
    }
    setTimeout(function() {
        let boxes = document.querySelectorAll('.glitch-box')
        for (let i = 0; i < boxes.length;i++) {
            boxes[i].remove()
        }
        block.style.display = 'none'
    }, GLITCH_TIME*1000)
})

const header = document.querySelector('header')
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        header.classList.add('change')
    }
    else {
        header.classList.remove('change')
    }    
})
