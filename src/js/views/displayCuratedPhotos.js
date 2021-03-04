import { appElement } from './base';
import { getHeight } from './onscroll';
// "build": "tailwind build src/style.css -o dist/style.css",
// export const displayPhotos = (photos) => {
//   return `<div id= ${photos.id}>
//         </div>`
// }
export const displayPhotos = (photos) => {
  const imageDiv = document.createElement('div');
  let markup = `<img src="${photos.src.original}" alt="" id=${photos.id} />`
  imageDiv.innerHTML = markup;
  appElement.gridContainer.appendChild(imageDiv)

  // GETTING THE HEIGHT OF THE CONTAINER WHEN THE IMAGES ARE FULLY LOADED
  // const container__height = appElement.imageContainer.getBoundingClientRect().height;
  // setTimeout(() => {

  //   console.log(appElement.imageContainer.getBoundingClientRect().height)
  //   getHeight(container__height)
  // }, 5000);
}

// console.log(container__height)