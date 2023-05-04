'use strict'

const activeBtn = document.querySelector('.about')
const itemClass = document.querySelectorAll('.item')
const iframeSide = document.querySelector('iframe')

activeBtn.addEventListener('click', (e) => {
  console.log(e.target.parentElement)

  itemClass.forEach(item => { item.classList.remove('active')})

  if (e.target.className === 'home-page') {
    e.target.parentElement.classList.add('active')
    iframeSide.src = 'indexHeader.html'
  }
  if (e.target.className === 'about-page') {
    e.target.parentElement.classList.add('active')
    iframeSide.src = 'about.html'
  }
  if (e.target.className === 'commercial-page') {

    e.target.parentElement.classList.add('active')
    iframeSide.src = 'commercial.html'
  }
  if (e.target.className === 'residential-page') {
    e.target.parentElement.classList.add('active')
    iframeSide.src = 'residential.html'
  }
  if (e.target.className === 'contact-page') {
    e.target.parentElement.classList.add('active')
    iframeSide.src = 'contact.html'
  }
})
