import { appElement } from './base';

const getHeight = () => {
    const container__height = appElement.imageContainer.clientHeight;
    if (value == container__height) {
        // ADD LOADER 
        // REMOVE LOADER
        // GET THE PRODUCT
    }
}

window.addEventListener('scroll', () => {
    const scroll_To = window.pageYOffset;
    // console.log(scroll_To)
    addSearchBar(scroll_To)

})


// ADD THE TOP SEARCH BAR WHEN THE BODY SCROLL REACHES 320
function addSearchBar(value) {
    if (value >= 320) {
        addSearchInput();
    }
    else {
        removeSearchInput()
    }

}

// ADD THE HEADER SEARCH INPUT
const addSearchInput = () => {
    appElement.topForm.classList.add('show');
}

// REMOVE THE HEADER SEARCH INPUT
const removeSearchInput = () => {
    appElement.topForm.classList.remove('show');
}



export { getHeight }
