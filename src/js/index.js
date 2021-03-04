import 'regenerator-runtime/runtime';
import { appElement } from './views/base';
import theme from './views/theme';
import onsroll, { getHeight } from './views/onscroll';
import { curatedData, Pictures } from './model/FetchData';
import { displayPhotos } from './views/displayCuratedPhotos';;
import { searchedImages } from './model/Search';
import { fetchGetPhoto } from './model/largeScreen';
import { displayLargePhoto } from './views/largerScreenViews';
import { emptyImage } from './views/largerScreenViews';
// const cors = 'https://cors-anywhere.herokuapp.com/'

// APP STATE
let appState = {
    query: '',
    photoData: {
        curated__photos: [],
        searched__photos: [],
        large__photo: [],
        next__page: []
    },
}


// CURATED PHOTOS
window.addEventListener('DOMContentLoaded', () => {
    const picturesList = new Pictures();
    let a = picturesList.fetchCuratedPhotos();
    getData(a);
})

const getData = async (promises) => {
    const resolvePromise = await promises;
    collectData(resolvePromise)
}

const collectData = (data) => {
    data.photos.forEach(curr => {
        appState.photoData.curated__photos = curr;
        displayPhotos(appState.photoData.curated__photos)
    })

}


// GET ID AND IMAGE OF CLICK IMAGE TO THE LARGE SCREEN

appElement.gridContainer.addEventListener('click', (e) => {
    const targetedImage = e.target.id;
    if (targetedImage) {
        // GET THE IMAGE
        getSelectedImage(targetedImage);
    }
})




const getSelectedImage = async (id) => {
    // CALL THE GET FUNCTION CONTAINING THE URL AND KEY
    let getPhotoPromise = fetchGetPhoto(id);

    // RESOLVE THE PROMISE AND GET THE DATA
    const resolvedData = await getPhotoPromise;

    // SAVED RESOLVED DATA TO APPSTATE
    appState.photoData.large__photo = [(resolvedData.data)]

    // SEND TO THE DOM
    displayLargePhoto(appState.photoData.large__photo)

    // ADD THE CONTAINER TO THE VIEW
    appElement.largeImage.classList.add('large__visible');

    // REMOVE THE CONTAINER IF THE IMAGE IS IN THE VIEW
    emptyImage(appState.photoData.large__photo);

}


// // GETTING THE SEARCHED INPUT FR0M THE SEARCHED BAR
appElement.form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        appElement.formInput.forEach(input => {
            // appState.query = input.value.trim('');
            if (input.value.trim() == '') {
                console.log('input value is empty')
            } else {

                // GET THE QUERY RESULTS
                // SEND TO THE APP STATE
                // REMOVE
                // ADD TO THE DOM
                console.log(input.value)
                searchedImages(input.value)
            }

        })
    })
})

// appElement.topForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(appElement.topForm.value)
// })