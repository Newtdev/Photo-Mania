import { appElement } from './views/base';
import theme from './views/theme';
import onsroll from './views/onscroll';
import { Pictures } from './model/FetchData'

// // ALL APP VARABLE
// const API_key = '563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08'

let appState = {
    q: '',
    data: {
        curated__photos: [],
        searched__photos: [],
    },
}

let b = new Pictures().fetchCuratedPhotos();
console.log(b);
// console.log(b.then(a => console.log(a)));
