import { appElement } from './base';
import axios from 'axios';

appElement.gridContainer.addEventListener('click', (e) => {
    const targetedImage = e.target.id;
    if (targetedImage) {
        console.log(targetedImage);
        // GET THE IMAGE
        // fetchGetPhoto(targetedImage);
        // SEND TO APP STATE
        // SEND TO THE DOM
        // ADD OTHER IMAGES THE ARRAY LIST
    }
})

