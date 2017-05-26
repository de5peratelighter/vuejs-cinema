function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ')
  }
}

let mouseOutHandler = function (event) {
    let span= event.target.parentNode.getElementsByTagName('SPAN')[0]
    addClass(span, 'tooltip-show')
}
let mouseOverHandler = function (event) {
    let span= event.target.parentNode.getElementsByTagName('SPAN')[0]
    removeClass(span, 'tooltip-show')
}

export { hasClass, addClass, removeClass, mouseOutHandler, mouseOverHandler };
