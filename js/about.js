'use strict'

const containerEl = document.querySelector('.container')

// const widthContainer = window.getComputedStyle(containerEl).width
// console.log(widthContainer)

containerEl.style.width = '900px'

const widthContainer = containerEl.offsetWidth
const heightContainer = containerEl.offsetHeight

console.log(widthContainer)
console.log(heightContainer)
