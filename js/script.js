'use strict'


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
