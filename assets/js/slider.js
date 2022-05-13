var sliderRadios = document.querySelectorAll('.slider__radio')

var prevSlide = document.querySelector('.slider__prev')
var nextSlide = document.querySelector('.slider__next')


autoSlider(sliderRadios, 5*1000)

prevSlide.onclick = () => prevRadio(sliderRadios)
nextSlide.onclick = () => nextRadio(sliderRadios)

function prevRadio(radios) {
    let current = Object.values(radios).findIndex(radio=>radio.checked)
    let next = (current + radios.length - 1) % radios.length
    radios[next].checked = true
}

function nextRadio(radios) {
    let current = Object.values(radios).findIndex(radio=>radio.checked)
    let next = (current + 1) % radios.length
    radios[next].checked = true
}

function autoSlider(radios, delay) {
    setInterval(()=>{
        nextRadio(radios)
    }, delay)
}