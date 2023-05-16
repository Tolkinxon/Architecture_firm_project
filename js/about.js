'use strict'

const containerEl = document.querySelector('.container')

// const widthContainer = window.getComputedStyle(containerEl).width
// console.log(widthContainer)

containerEl.style.width = '900px'

const widthContainer = containerEl.clientWidth

console.log(widthContainer)
