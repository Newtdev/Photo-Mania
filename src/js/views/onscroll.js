import { appElement } from './base'

window.addEventListener('scroll', () => {
    const scroll_To = window.pageYOffset;
    if (scroll_To >= 320) {
        addSearchInput();
    }
    else {
        removeSearchInput()
    }
})

// ADD THE HEADER SEARCH INPUT
const addSearchInput = () => {
    appElement.topForm.classList.add('show')
}
// REMOVE THE HEADER SEARCH INPUT
const removeSearchInput = () => {
    appElement.topForm.classList.remove('show')
}