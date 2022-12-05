import initOutsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');

  function openMenu() {
    if (
      menuList.classList.contains("desativo") ||
      menuList.classList.contains("desativo2")
    ) {
      menuList.classList.remove("desativo");
      menuList.classList.remove("desativo2");
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
    } else {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
      menuList.classList.add("desativo2");
    }

    initOutsideClick(menuList, "click", () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
      menuList.classList.add("desativo2");
    });
  }

  menuButton.addEventListener("click", openMenu);
}
