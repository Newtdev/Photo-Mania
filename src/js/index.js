import 'regenerator-runtime/runtime';
import { appElement } from './views/base';
import theme from './views/theme';
import onsroll from './views/onscroll';
import { Pictures } from './model/FetchData';
import { displayPhotos } from './views/displayCuratedPhotos';;
import Search from './model/Search';
// const cors = 'https://cors-anywhere.herokuapp.com/'

// APP STATE
let appState = {
    q: '',
    photoData: {
        curated__photos: [],
        searched__photos: [],
    },
}


// CURATED PHOTOS

const collectData = (data) => {
    console.log(data);
    const { id } = data;
    const originalImages = data.data.photos.src.original;

    // appState.photoData.curated__photos =
    // displayPhotos(appState.curated__photos);
}

// // console.log(b.then(a => console.log(a)));
