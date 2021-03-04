import 'regenerator-runtime/runtime';
import { appElement } from './views/base';
import theme from './views/theme';
import onsroll, { getHeight } from './views/onscroll';
import { curatedData, Pictures } from './model/FetchData';
import { displayPhotos } from './views/displayCuratedPhotos';
import { searchedImages } from './model/Search';
import { fetchGetPhoto } from './model/largeScreen';
import { displayLargePhoto, emptyImage } from './views/largerScreenViews';
import { addLoader } from './views/search_views';
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


// // GETTING THE SEARCHED INPUT FR0M THE SEARCHED BAR
appElement.form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchedValue = item.children[0].value;
        if (searchedValue.trim() == '') {
            alert('Please input a searched term!')
        } else {
            // GET THE QUERY RESULTS
            let c = searchedImages(searchedValue.trim()).then(resolve => {
                console.log(resolve)
                getData(resolve.data)
            })
            // INPUT SHOULD BE EMPTY STRING
            // input.value = '';
            // console.log(searchedImages()
            // REMOVE
            // input.focus = 
            // ADD TO THE DOM
            // console.log(input.value)
        }
    })
})

const getData = async (promises) => {
    const resolvePromise = await promises;
    console.log(resolvePromise)
    // collectData(resolvePromise)
}

const collectData = (data) => {
    data.photos.forEach(curr => {
        // SAVE ALL TO APP STATE
        appState.photoData.curated__photos = curr;

        // ADD LOADER
        addLoader(appState.photoData.curated__photos)
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

// appElement.topForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(appElement.topForm.value)
// })