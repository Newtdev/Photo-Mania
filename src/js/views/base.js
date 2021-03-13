export const appElement = {
    theme: document.querySelector('.theme__image'),
    body: document.querySelector('body'),
    topForm: document.querySelector('.top__form'),
    gridContainer: document.getElementById('grid'),
    form: document.querySelectorAll('form'),
    largeImage: document.getElementById('image__large'),
    largeImageContainer: document.querySelector('#large__image div'),
    imageContainer: document.querySelector('.image__container'),
    imageGrid: document.querySelector('.curated__grid'),
    curatedLoader: document.querySelector('.loader'),
    topLoader: document.querySelector('.image__container .loader__container'),
    prevBtn: document.getElementById('prev'),
    nextBtn: document.querySelector('.load__more'),
    loadMore: document.querySelector('.container'),
    searchedGrid: document.querySelector('.search__grid'),
    searchedContainer: document.querySelector('.search__container'),
    searchedLoader: document.querySelector('.search__container .loader__container'),
    section: document.querySelectorAll('.section')
    // largeImageDiv: document.getElementById()
}
appElement.searchedLoader.style.display = 'none';
