'use strict'

// ********************  HOME SIDE ***********************

const wrapperCarusel = document.querySelector('.carusel')
const images = document.querySelectorAll('.slideImg')
let slide = document.querySelector('.slide')
const next = document.querySelector('.fa-forward')
const prev = document.querySelector('.fa-backward')

slide.style.width = images.length * 100 + '%'

let width = window.getComputedStyle(wrapperCarusel).width //carusel classli divini eni uzunligi
width = parseInt(width)

wrapperCarusel.style.overflow = 'hidden'

let offset = 0

const movingCarusel = setInterval(() => {
  offset -= width

  slide.style.transform = `translateX(${offset}px)`
  slide.style.transition = '0.5s ease all'

  if (offset === width * -4) {
    setTimeout(() => {
      slide.remove()

      slide = document.createElement('div')
      slide.classList.add('slide')
      slide.style.width = images.length * 100 + '%'

      images.forEach((item) => {
        slide.append(item)
      })
      wrapperCarusel.append(slide)
      offset = 0
    }, 500)
  }
}, 1000)

wrapperCarusel.addEventListener('mouseenter', () => {
  clearInterval(movingCarusel)
})

next.addEventListener('click', () => {
  clearInterval(movingCarusel)

  offset -= width

  slide.style.transform = `translateX(${offset}px)`
  slide.style.transition = '0.5s ease all'

  if (offset === width * -4) {
    setTimeout(() => {
      slide.remove()

      slide = document.createElement('div')
      slide.classList.add('slide')
      slide.style.width = images.length * 100 + '%'

      images.forEach((item) => {
        slide.append(item)
      })
      wrapperCarusel.append(slide)
      offset = 0
    }, 500)
  }
})

prev.addEventListener('click', () => {
  clearInterval(movingCarusel)

  offset += width
  slide.style.transform = `translateX(${offset}px)`
  slide.style.transition = '0.5s ease all'

  if (offset > 0) {
    setTimeout(() => {
      slide.remove()

      slide = document.createElement('div')
      offset = width * -3
      slide.style.transform = `translateX(${offset}px)`
      slide.classList.add('slide')
      slide.style.width = images.length * 100 + '%'

      images.forEach((item) => {
        slide.append(item)
      })
      wrapperCarusel.append(slide)
    }, 500)
  }
})

// ********************  HOME SIDE ***********************

//********************  COMMERCIAL PAGE SIDE  **********************

const commercialSlideImg = document.querySelector('.commercialSlideImg')
const wrapperImg = document.querySelector('.wrapperImg')
const WWImg = document.querySelector('.wrapperWrapperImg')
const commercialImages1 = document.querySelectorAll('.commercialImages1')
let widthCommercial = window.getComputedStyle(wrapperImg).width

widthCommercial = parseInt(widthCommercial)

commercialImages1.forEach((item) => {
 item.document.style.width = widthCommercial
})

WWImg.style.width = commercialImages1.length * 100 + '+'

//********************  COMMERCIAL PAGE SIDE  **********************
