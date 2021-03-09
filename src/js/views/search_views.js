import { appElement } from './base';
import { displayPhotos } from "./displayCuratedPhotos"

// ON CLICK OF THE SEARCH BUTTON
appElement.topLoader.classList.add('load');

const addLoader = (photos) => {
    setTimeout(() => {
        appElement.topLoader.classList.remove('load')
        setTimeout(() => {
            displayPhotos(photos)
            // console.log(photos);
            // photos
        });

    }, 4000);
}
export { addLoader }

