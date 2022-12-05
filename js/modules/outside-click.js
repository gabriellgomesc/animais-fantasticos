export default function initOutsideClick(element, event, callback) {
  const html = document.documentElement;
  const userEvent = event;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener(userEvent, handleOutsideClick);
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    setTimeout(() => {
      html.addEventListener(userEvent, handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
}
