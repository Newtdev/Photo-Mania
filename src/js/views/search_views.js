import { appElement } from './base';
import { displayPhotos } from "./displayCuratedPhotos";

// ON CLICK OF THE SEARCH BUTTON
appElement.curatedLoader.classList.add('show');

const addLoader = (photos) => {
    setTimeout(() => {
        appElement.curatedLoader.classList.remove('show');
        setTimeout(() => {
            displayPhotos(photos);
            // console.log(photos);
            // photos
        });

    }, 4000);
};
export { addLoader };

