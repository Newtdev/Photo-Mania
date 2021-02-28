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
const picturesList = new Pictures();
async function getData() {
    let data = await picturesList.fetchCuratedPhotos()
    collectData(data)
}
getData()

const collectData = (data) => {
    const fetchPhotosData = data.photos.map(curr => {
        // const id = curr.id;
        // const { original } = curr.src
        // console.log(original);
        // return id, original
        console.log(curr)
        displayPhotos(curr)

    })
}

// // console.log(b.then(a => console.log(a)));
