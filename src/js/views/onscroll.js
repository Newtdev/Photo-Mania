import { appElement } from './base';


function addLoader() {
    appElement.loader.classList.add('show');

    setTimeout(() => {
        appElement.loader.classList.remove('show');


    }, 5000);
}


const getHeight = (height) => {

    window.addEventListener('scroll', () => {
        const scroll_To = window.pageYOffset;

        addSearchBar(scroll_To);

        if (height == scroll_To) {
            // ADD LOADER 

            addLoader();

        }

    });
};
getHeight();
export { getHeight };


// ADD THE TOP SEARCH BAR WHEN THE BODY SCROLL REACHES 320
function addSearchBar(value) {
    if (value >= 320) {
        addSearchInput();
    }
    else {
        removeSearchInput();
    }

}

// ADD THE HEADER SEARCH INPUT
const addSearchInput = () => {
    appElement.topForm.classList.add('show');
    appElement.header.classList.add('header__color');
};

// REMOVE THE HEADER SEARCH INPUT
const removeSearchInput = () => {
    appElement.topForm.classList.remove('show');
    appElement.header.classList.remove('header__color');

};


export const InfiniteScroll = (page) => {
    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight === scrollHeight && photos.next_page) {
            return page;
        }

    });
};



