import { appElement } from './base'
// "build": "tailwind build src/style.css -o dist/style.css",
export const displayPhotos = (photos) => {
  const displayPics = photos.map(currPhoto => {
    return `<div id= ${currPhoto.id}>
       <img src="${currPhoto.url}" alt="" />
        </div>`
  }).join('');
  appElement.gridContainer.innerHTML = displayPics;
}