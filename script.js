// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

/* tornar algo ativo */
const linksInternos = document.querySelectorAll(`a[href^="#"]`)

function ativo(event) {
  event.preventDefault()
  linksInternos.forEach((link) => {
    link.classList.remove(`ativo`)
  })
  event.currentTarget.classList.add(`ativo`)
}

linksInternos.forEach((link) => {
  link.addEventListener(`click`, ativo)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const tudo = document.querySelectorAll(`body *`)

function umElemento(event) {
  event.currentTarget.remove()
}

// tudo.forEach((elemento) => {
//   elemento.addEventListener(`click`, umElemento)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) {
  console.log(event.key)
  if (event.key === `t`) {
    document.documentElement.classList.toggle(`textomaior`)
  }
}

window.addEventListener(`keydown`, handleClickT)

/*———————— aula 01 ————————*/

// const img = document.querySelector(`img`)

// img.addEventListener(`click`, callback)

// function callback(event) {
//   console.log(event, `clicou.`)
// }

// const animaisLista = document.querySelector(`.animais-lista`)

// function callbackLista(event) {
//   console.log(event.currentTarget)
//   console.log(event.target)
//   console.log(event.type)
// }

// animaisLista.addEventListener(`click`, callbackLista)

// const linkExterno = document.querySelector(`a[href^="http"]`)

// function handleLinkExterno(event) {
//   event.preventDefault()
//   console.log(event)
// }

// linkExterno.addEventListener(`click`, handleLinkExterno)

// const h1 = document.querySelector(`h1`)

// function callbackH1(event) {
//   console.log(event.type, event)
// }

// h1.addEventListener(`click`, callbackH1)


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

/*———————— aula 02 ————————*/

const imgs = document.querySelectorAll(`img`)

function handleImg(event) {
  console.log(event.currentTarget.getAttribute(`src`))
}

imgs.forEach((img) => {
  img.addEventListener(`click`, handleImg)
})