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
function handleClickT(event) {
  console.log(event.key)
  if (event.key === `t`) {
    document.documentElement.classList.toggle(`textomaior`)
  }
}

window.addEventListener(`keydown`, handleClickT)

/* alterar tema da página (claro/escuro) */
const claro = document.querySelector(`body`).classList
const imgMenu = document.querySelector(`img`)

function alteraTema() {
  if (claro[0] === `claro`) {
    document.body.classList.remove(`claro`)
    document.body.classList.add(`escuro`)
  } else {
    document.body.classList.remove(`escuro`)
    document.body.classList.add(`claro`)
  }
}

imgMenu.addEventListener(`click`, alteraTema)