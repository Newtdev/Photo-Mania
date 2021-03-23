import 'regenerator-runtime/runtime';
import { appElement } from './views/base';
import theme from './views/theme';
import onsroll, { getHeight } from './views/onscroll';
import { curatedData, Pictures } from './model/FetchData';
import { displayPhotos } from './views/displayCuratedPhotos';
import { fetchFunt, searchedImages } from './model/Search';
import { fetchGetPhoto } from './model/largeScreen';
import { displayLargePhoto, emptyImage } from './views/largerScreenViews';
import { addLoader } from './views/search_views';
import { displaySearchPhotos } from './views/displaySearched';
// const cors = 'https://cors-anywhere.herokuapp.com/'

// APP STATE
let appState = {
    photoData: {
        curated__photos: [],
        searched__photos: [],
        large__photo: [],
    },
};


// GETTING THE SEARCHED INPUT FR0M THE SEARCHED BAR
appElement.form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        inputFunt(item);
    });
});

const inputFunt = (item) => {
    // GET THE INPUT VALUE FROM EACH OF THE FORM INPUT
    const searchedValue = item.children[0].value;

    if (searchedValue == '') {
        alert('Please input a searched term!');
    } else {

        // GET THE QUERY RESULTS
        resolvedSearchedValue(searchedValue);

        // INPUT VALUE SET TO EMPTY
        item.children[0].value = '';

    }


};
const resolvedSearchedValue = async (value) => {

    // AWAIT THE PROMISE FROM THE RESULT OF THE VALUE
    const saveImages = await searchedImages(value);
    // GET THE DATA FROM THE PROMISE

    // SAVE TO APPSTATE
    appState.photoData.searched__photos = saveImages;

    // console.log(appState.photoData.searched__photos);
    // ADD LOADER AND DISPLAY RESULT

    displaySearchPhotos(appState.photoData.searched__photos);

    // ADD VISIBILITY TO THE SEARCHED CONTAINER
    appElement.imageContainer.style.display = 'none';
    appElement.searchedContainer.classList.add('appears');

    // return searchedPhotos;

};












// CURATED PHOTOS
window.addEventListener('Load', () => {
    const picturesList = new Pictures();
    let picturePromise = picturesList.fetchCuratedPhotos();
    getData(picturePromise);
});


const getData = async (promises) => {
    // RESOLVED PROMISES OF CURATED PHOTOS
    const resolvePromise = await promises;

    // SAVED CURATED APP IN APPSTATE
    collectData(resolvePromise);

};

const collectData = (data) => {
    appState.photoData.curated__photos = data;

    displayPhotos(appState.photoData.curated__photos);
};






// let url = `https://api.pexels.com/v1/curated/?page=${next++}&per_page=10`;


// GET ID AND IMAGE OF CLICK IMAGE TO THE LARGE SCREEN
appElement.section.forEach(cur => {
    cur.addEventListener('click', (e) => {
        const targetedImage = e.target.parentElement.children[0].id;
        // console.log(targetedImage);


        if (targetedImage) {

            // GET THE IMAGE
            getSelectedImage(targetedImage);
        }
    });
});




const getSelectedImage = async (id) => {
    // CALL THE GET FUNCTION CONTAINING THE URL AND KEY
    let getPhotoPromise = fetchGetPhoto(id);

    // RESOLVE THE PROMISE AND GET THE DATA
    const resolvedData = await getPhotoPromise;

    // SAVED RESOLVED DATA TO APPSTATE
    appState.photoData.large__photo = [(resolvedData.data)];

    // SEND TO THE DOM
    displayLargePhoto(appState.photoData.large__photo);

    // ADD THE CONTAINER TO THE VIEW
    appElement.largeImage.classList.add('large__visible');

    // REMOVE THE CONTAINER IF THE IMAGE IS IN THE VIEW
    emptyImage(appState.photoData.large__photo);

};


