'use strict'

const activeBtn = document.querySelector('.about')
const itemClass = document.querySelectorAll('.item')
const HomePage = document.querySelector('.Home')
const AboutPage = document.querySelector('.About')

activeBtn.addEventListener('click', (e) => {
  console.log(e.target.parentElement)

  itemClass.forEach((item) => {
    item.classList.remove('active')
  })

  if (e.target.className === 'home-page') {
    e.target.parentElement.classList.add('active')
    HomePage.style.display = 'block'
    AboutPage.style.display = 'none'
  }
  if (e.target.className === 'about-page') {
    e.target.parentElement.classList.add('active')
    HomePage.style.display = 'none'
    AboutPage.style.display = 'block'
  }
  if (e.target.className === 'commercial-page') {
    e.target.parentElement.classList.add('active')
    iframeSide.src = 'commercial.html'
  }
  if (e.target.className === 'residential-page') {
    e.target.parentElement.classList.add('active')
  }
  if (e.target.className === 'contact-page') {
    e.target.parentElement.classList.add('active')
  }
})
