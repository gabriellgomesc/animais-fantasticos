import initOutsideClick from "./outside-click.js";
("./outside-click.js");

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');
  const clique = ["click"];

  function openMenu() {
    if (menuList.classList.contains("desativo")) {
      menuList.classList.remove("desativo");
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
    } else {
      menuList.classList.add("desativo");
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    }

    initOutsideClick(menuList, clique, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
      menuList.classList.add("desativo");
      menuButton.classList.add("desativo");
    });
  }

  menuButton.addEventListener("click", openMenu);
}
