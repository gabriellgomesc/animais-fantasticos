import initOutsideClick from "./outside-click.js";

export default function intitDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    initOutsideClick(this, "click", () => {
      this.classList.remove("ativo");
    });
  }
}
