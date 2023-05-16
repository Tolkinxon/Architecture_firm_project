'use strict'

const activeBtn = document.querySelector('.about')
const itemClass = document.querySelectorAll('.item')
const HomePage = document.querySelector('.Home')
const AboutPage = document.querySelector('.About')
const CommercialPage = document.querySelector('.Commercial')
const ResidentialPage = document.querySelector('.Residential')
const ContactPage = document.querySelector('.Contact')


activeBtn.addEventListener('click', (e) => {
  console.log(e.target.parentElement)

  itemClass.forEach((item) => {
    item.classList.remove('active')
  })

  if (e.target.className === 'home-page') {
    e.target.parentElement.classList.add('active')
    HomePage.style.display = 'block'
    AboutPage.style.display = 'none'
    CommercialPage.style.display = 'none'
    ResidentialPage.style.display = 'none'
    ContactPage.style.display = 'none'
  }
  if (e.target.className === 'about-page') {
    e.target.parentElement.classList.add('active')
    HomePage.style.display = 'none'
    AboutPage.style.display = 'block'
    CommercialPage.style.display = 'none'
    ResidentialPage.style.display = 'none'
    ContactPage.style.display = 'none'
  }
  if (e.target.className === 'commercial-page') {
    e.target.parentElement.classList.add('active')
    HomePage.style.display = 'none'
    AboutPage.style.display = 'none'
    CommercialPage.style.display = 'block'
    ResidentialPage.style.display = 'none'
    ContactPage.style.display = 'none'
  }
  if (e.target.className === 'residential-page') {
    e.target.parentElement.classList.add('active')
    HomePage.style.display = 'none'
    AboutPage.style.display = 'none'
    CommercialPage.style.display = 'none'
    ResidentialPage.style.display = 'block'
    ContactPage.style.display = 'none'
  }
  if (e.target.className === 'contact-page') {
    e.target.parentElement.classList.add('active')
    HomePage.style.display = 'none'
    AboutPage.style.display = 'none'
    CommercialPage.style.display = 'none'
    ResidentialPage.style.display = 'none'
    ContactPage.style.display = 'block'
  }
})
