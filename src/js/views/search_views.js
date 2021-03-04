import { appElement } from './base';
import { displayPhotos } from "./displayCuratedPhotos"

// ON CLICK OF THE SEARCH BUTTON
appElement.topLoader.classList.add('load');

const addLoader = (photos, display) => {
    setTimeout(() => {
        appElement.topLoader.classList.remove('load')
        setTimeout(() => {
            // displayPhotos(photos)
            // display
        });

    }, 4000);
}
export { addLoader }