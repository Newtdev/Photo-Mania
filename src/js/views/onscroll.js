import { appElement } from './base';
// ADD LOADER

function addLoader() {
    appElement.loader.classList.add('show')

    setTimeout(() => {
        appElement.loader.classList.remove('show')


    }, 5000);
}
// addLoader()

// getHeight()

const getHeight = (height) => {

    window.addEventListener('scroll', () => {
        const scroll_To = window.pageYOffset;
        // console.log(scroll_To);
        // console.log(scroll_To)
        addSearchBar(scroll_To)

        if (height == scroll_To) {
            // ADD LOADER 
            console.log('reached')
            addLoader()
            // REMOVE LOADER
            // GET THE PRODUCT
        }

    })
}
getHeight();
export { getHeight }


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



