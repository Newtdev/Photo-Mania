import 'regenerator-runtime/runtime';
import { appElement } from './views/base';
import theme from './views/theme';
import onsroll from './views/onscroll';
import { Pictures } from './model/FetchData';
import { displayPhotos } from './views/displayCuratedPhotos';;
import Search from './model/Search';
import largeScreen from './model/largeScreen';
// const cors = 'https://cors-anywhere.herokuapp.com/'

// APP STATE
let appState = {
    q: '',
    photoData: {
        curated__photos: [],
        searched__photos: [],
        large_photo: {}
    },
}


// CURATED PHOTOS
window.addEventListener('DOMContentLoaded', () => {
    const picturesList = new Pictures();

    getData(picturesList)

})

async function getData(picturesList) {
    let data = await picturesList.fetchCuratedPhotos();
    collectData(data)
}

const collectData = (data) => {
    const fetchPhotosData = data.photos.map(curr => {
        return curr;
        // appState.photoData.curated__photos = curr;
        // displayPhotos(appState.photoData.curated__photos)
    })
}


