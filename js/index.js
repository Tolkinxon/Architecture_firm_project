'use strict'

const activeBtn = document.querySelector('.about')
const iframeSide = document.querySelector('iframe')

activeBtn.addEventListener('click', (e) => {
  console.log(e.target.className)
  if (e.target.className === 'home-page') {
    iframeSide.src = 'indexHeader.html'
  }
  if (e.target.className === 'about-page') {
    iframeSide.src = 'about.html'
  }
  if (e.target.className === 'commercial-page') {
    iframeSide.src = 'commercial.html'
  }
  if (e.target.className === 'residential-page') {
    iframeSide.src = 'residential.html'
  }
  if (e.target.className === 'contact-page') {
    iframeSide.src = 'contact.html'
  }
})
