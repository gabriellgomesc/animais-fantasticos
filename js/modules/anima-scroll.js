export default function initScroll() {
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
        } else if (section.classList.contains(activeClass)) {
          section.classList.remove(activeClass);
        }
      });
      window.addEventListener("scroll", animaScroll);
    }
    animaScroll();
  }
}
