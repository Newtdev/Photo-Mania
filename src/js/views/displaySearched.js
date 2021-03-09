import { appElement } from './base';
import { getHeight } from './onscroll';

export const displaySearchPhotos = (photos) => {
    const photoGrid = photos.map(images => {
        return `
        <div class='relative'>
        <img src="${images.src.original}" alt="" id=${images.id} />
        </div>
    `;
    }).join('')

    // console.log(photoGrid)
    appElement.searchedGrid.innerHTML = photoGrid;



}

function getNext(page) {
    if (page.prev_page || page.next_page) {

    }
}