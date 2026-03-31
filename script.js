const prev = document.getElementById('prev')
const next = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.indicators li')

let active = 0
const total = items.length

function updateSlider() {
    items.forEach(item => item.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'))

    items[active].classList.add('active')
    dots[active].classList.add('active')
}

next.addEventListener('click', () => {
    active = (active + 1) % total
    updateSlider()
})

prev.addEventListener('click', () => {
    active = (active - 1 + total) % total
    updateSlider()
})




