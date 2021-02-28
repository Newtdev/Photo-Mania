import { appElement } from './base'
// "build": "tailwind build src/style.css -o dist/style.css",
// export const displayPhotos = (photos) => {
//   return `<div id= ${photos.id}>
//         </div>`
// }
export const displayPhotos = (photos) => {
  const imageDiv = document.createElement('div');
  let markup = `<img src="${photos.src.original}" alt="" />`
  imageDiv.innerHTML = markup;
  appElement.gridContainer.appendChild(imageDiv)
}