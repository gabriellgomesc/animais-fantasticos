/* tornar algo ativo */
// const linksInternos = document.querySelectorAll(`a[href^="#"]`)

// function ativo(event) {
//   event.preventDefault()
//   linksInternos.forEach((link) => {
//     link.classList.remove(`ativo`)
//   })
//   event.currentTarget.classList.add(`ativo`)
// }

// linksInternos.forEach((link) => {
//   link.addEventListener(`click`, ativo)
// })

/* aumentar o texto */
const texto = document.querySelector(`.texto`)

function aumentaTexto() {
  document.documentElement.classList.toggle(`textomaior`)
}

texto.addEventListener(`click`, aumentaTexto)

/* alterar tema da página (claro/escuro) */
const claro = document.querySelector(`body`).classList
const tema = document.querySelector(`.tema`)

function alteraTema() {
  if (claro[0] === `claro`) {
    document.body.classList.remove(`claro`)
    document.body.classList.add(`escuro`)
  } else {
    document.body.classList.remove(`escuro`)
    document.body.classList.add(`claro`)
  }
}

tema.addEventListener(`click`, alteraTema)

// navegação por tabs
const tabMenu = document.querySelectorAll(`.js-tabmenu li`)
const tabContent = document.querySelectorAll(`.js-tabcontent section`)

if (tabMenu.length && tabMenu.length) {
  tabContent[0].classList.add(`ativo`)
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(`ativo`)
    })
    tabContent[index].classList.add(`ativo`)
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener(`click`, () => {
      activeTab(index)
    })
  })
}