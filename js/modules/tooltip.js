export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function mouseOver(event) {
    const tooltipBox = createTooltip(this);

    mouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", mouseMove);
    mouseLeave.tooltipBox = tooltipBox;
    mouseLeave.element = this;
    this.addEventListener("mouseleave", mouseLeave);
  }

  const mouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", mouseLeave);
      this.element.removeEventListener("mousemove", mouseMove);
    },
  };

  const mouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
      this.tooltipBox.style.top = event.pageY + 20 + "px";
    },
  };

  function createTooltip(element) {
    const tooltipBox = document.createElement("span");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", mouseOver);
  });
}
