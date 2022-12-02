/* tornar algo ativo */
// const linksInternos = document.querySelectorAll('a[href^="#"]')

// function ativo(event) {
//   event.preventDefault()
//   linksInternos.forEach((link) => {
//     link.classList.remove('ativo')
//   })
//   event.currentTarget.classList.add('ativo')
// }

// linksInternos.forEach((link) => {
//   link.addEventListener('click', ativo)
// })

// aumentar o texto
function initTextoMaior() {
  const textos = document.querySelectorAll(".texto");

  function aumentaTexto() {
    document.documentElement.classList.toggle("textomaior");
    textos.forEach((texto) => {
      texto.classList.toggle("ativo");
    });
  }

  textos.forEach((texto) => {
    texto.addEventListener("click", aumentaTexto);
  });
}
initTextoMaior();

// alterar tema da página (claro/escuro)
function initTemas() {
  const claro = document.querySelector("body").classList;
  const temas = document.querySelectorAll(".tema");

  const temaPC = window.matchMedia("(prefers-color-scheme: dark)");
  if (temaPC.matches) {
    document.body.classList.remove("claro");
    document.body.classList.add("escuro");
    temas.forEach((tema) => {
      tema.classList.add("ativo");
    });
  } else {
    document.body.classList.remove("escuro");
    document.body.classList.add("claro");
    temas.forEach((tema) => {
      tema.classList.remove("ativo");
    });
  }

  function alteraTema() {
    if (claro[0] === "claro") {
      document.body.classList.remove("claro");
      document.body.classList.add("escuro");
      temas.forEach((tema) => {
        tema.classList.add("ativo");
      });
    } else {
      document.body.classList.remove("escuro");
      document.body.classList.add("claro");
      temas.forEach((tema) => {
        tema.classList.remove("ativo");
      });
    }
  }
  temas.forEach((tema) => {
    tema.addEventListener("click", alteraTema);
  });
}
initTemas();

// navegação por tabs
const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
const activeClass = "ativo";
const tabContent = document.querySelectorAll('[data-tab="content"] section');

if (tabMenu.length && tabMenu.length) {
  tabContent[0].classList.add(activeClass);
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direcao);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

// accordion-list
function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function accordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", accordion);
    });
  }
}
initAccordion();

// animação ao scroll
function initScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const window60 = window.innerHeight * 0.6;
    const activeClass = "ativo";

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - window60 <= 0;
        if (isSectionVisible) {
          section.classList.add(activeClass);
        } else {
          section.classList.remove(activeClass);
        }
      });
      window.addEventListener("scroll", animaScroll);
    }
    animaScroll();
  }
}
initScroll();
