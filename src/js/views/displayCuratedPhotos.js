import { appElement } from './base';
import { getHeight } from './onscroll';
// "build": "tailwind build src/style.css -o dist/style.css",
// export const displayPhotos = (photos) => {
//   return `<div id= ${photos.id}>
//         </div>`
// }
export const displayPhotos = (photos) => {
  const curatedPhotos = photos.map(photos => {
    return `<img src="${photos.src.original}" alt="" id=${photos.id} />`
  }).join('');

  appElement.imageGrid.innerHTML = curatedPhotos;
  // console.log(appElement.imageContainer.clientHeight)
}

// console.log(container__height)