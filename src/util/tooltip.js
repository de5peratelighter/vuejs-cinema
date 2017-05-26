import { addClass, removeClass, mouseOutHandler, mouseOverHandler } from './helpers'
export default {
    install(Vue) {
        Vue.directive('tooltip', {
            bind (el, bindings) {
                let span = document.createElement('SPAN')
                let text = document.createTextNode(`Seats availale : ${bindings.value.seats}`)
                span.appendChild(text)
                addClass(span, 'tooltip')
                el.appendChild(span)
                
                let div = el.getElementsByTagName('DIV')[0]
                div.addEventListener('mouseover', mouseOutHandler)
                div.addEventListener('mouseout', mouseOverHandler)
                div.addEventListener('touchstart', mouseOutHandler)
                div.addEventListener('touchend', mouseOverHandler)
            },
            unbind (el) {
                let div = el.getElementsByTagName('DIV')[0]
                div.removeEventListener('mouseover', mouseOutHandler)
                div.removeEventListener('mouseout', mouseOverHandler)
                div.removeEventListener('touchstart', mouseOutHandler)
                div.removeEventListener('touchend', mouseOverHandler)
            }
        })
    }
}