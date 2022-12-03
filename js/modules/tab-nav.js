export default function initTabNav() {
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
}
