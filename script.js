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


// Navegação com teclado (setas)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        active = (active + 1) % total
        updateSlider()
    }

    if (e.key === 'ArrowLeft') {
        active = (active - 1 + total) % total
        updateSlider()
    }
})

// Permitir navegação com TAB + ENTER nos botões
prev.setAttribute('tabindex', '0')
next.setAttribute('tabindex', '0')

prev.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        active = (active - 1 + total) % total
        updateSlider()
    }
})

next.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        active = (active + 1) % total
        updateSlider()
    }
})

// Navegação pelos indicadores (bolinhas)
dots.forEach((dot, index) => {
    dot.setAttribute('tabindex', '0')

    dot.addEventListener('click', () => {
        active = index
        updateSlider()
    })

    dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            active = index
            updateSlider()
        }
    })
})



