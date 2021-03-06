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
        inputFunt(item);
    })
})

const inputFunt = (item) => {
    // GET THE INPUT VALUE FROM EACH OF THE FORM INPUT
    const searchedValue = item.children[0].value;

    if (searchedValue == '') {
        alert('Please input a searched term!')
    } else {

        // GET THE QUERY RESULTS
        resolvedSearchedValue(searchedValue);

        // INPUT VALUE SET TO EMPTY
        item.children[0].value = '';

    }


}
function resolvedSearchedValue(value) {
    searchedImages(value).then(resolve => {
        getData(resolve.data)
    })

}
const getData = async (promises) => {
    // RESOLVED PROMISES OF CURATED PHOTOS
    const resolvePromise = await promises;

    // SAVED CURATED APP IN APPSTATE
    const curatedArr = collectData(resolvePromise)

    // ADD LOADER
    addLoader(curatedArr)

    // NEXT PAGE
    LoadMore(resolvePromise.next_page, curatedArr)
}


const collectData = (data) => {

    return appState.photoData.curated__photos = data.photos;
    // console.log(appState.photoData.curated__photos)

    // data.photos.forEach(curr => {
    //     //     // SAVE ALL TO APP STATE
    //     appState.photoData.curated__photos = curr;
    //     // console.log(appState.photoData.curated__photos)

    //     // ADD LOADER
    //     console.log(appState)
    // })
    // console.log(appState.photoData.curated__photos)

}

// LOAD MORE FUNCTIONALITY
const LoadMore = (more, state) => {
    appElement.button.addEventListener('click', () => {
        // CHECK IF THE NEXT IS AVAILABLE
        if (more) {
            // ADD THE BUTTON
            // LOAD THE NEXT URL
            loadURL(more, state);
            // ADD TO THE APP STATE AND ADD TO THE DOM
        }
    })
}

const loadURL = async (next, state) => {
    const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";
    let next__data = await fetchFunt(next, key)
    console.log(next)
    const nextData = next__data.data.photos;
    // addLoader(nextData)

    // state = []
    state.length > 0 ? state.length = 0 : state = nextData
    // console.log(state)
    // console.log(nextData)




}



// GET ID AND IMAGE OF CLICK IMAGE TO THE LARGE SCREEN
appElement.imageContainer.addEventListener('click', (e) => {
    const targetedImage = e.target.id;
    if (targetedImage) {
        // console.log(targetedImage)
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


