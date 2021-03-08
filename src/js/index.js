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
    collectData(resolvePromise);


    // ADD LOADER
    // console.log(saved)

    // NEXT PAGE
    nextPage(resolvePromise)
}

const collectData = (data) => {
    // console.log(data);
    appState.photoData.curated__photos = data.photos
    addLoader(appState.photoData.curated__photos)
}

const nextPage = (page) => {
    console.log(page)
    if (page.prev_page || page.next_page) {

        appElement.loadMore.innerHTML = `
        ${page.prev_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" data-id="prev" onclick ='handlePromise('${page.prev_page}')'> prev</button>` : ''
            }

    ${page.next_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" data-id='next' onclick ='handlePromise('${page.next_page}')'> 
        next
        </button>` : ''
            }
            
            
    `
        //   ? `< button class="btn" onclick = "getMoreSongs('${data.prev}')" > Prev</button >`

    } else {
        appElement.loadMore.innerHTML = '';
    }
    // handlePromise(page)

}

// const buttonFunction = (id) => {
//     document.querySelectorAll('.load__more').forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             const targetBtn = e.currentTarget.dataset.id;
//             if (targetBtn) {
//                 console.log(targetBtn)
//             }
//         })
//     })
// }
async function handlePromise() {
    console.log(link)
    const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";
    const resolved = await fetchFunt(link, key)
    console.log(resolved)
}



// let url = `https://api.pexels.com/v1/curated/?page=${next++}&per_page=10`;


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


