import { appElement } from './base';
import { getHeight } from './onscroll';
// "build": "tailwind build src/style.css -o dist/style.css",
// export const displayPhotos = (photos) => {
//   return `<div id= ${photos.id}>
//         </div>`
// }
export const displayPhotos = (photos) => {

  const photoGrid = photos.map(images => {

    return `<div><img src="${images.src.original}" alt="" id=${images.id} /></div>`
  }).join('')

  // console.log(photoGrid)
  appElement.imageGrid.innerHTML = photoGrid;

}

const nextPage = (page) => {
  if (page.next_page || page.prev_page) {
    page.prev_page ? addPage(appElement.prevBtn) : removePage(appElement.prevBtn);

    page.next_page ? addPage(appElement.next_page) : removePage(appElement.next_page)
  }

}
export { nextPage }

function addPage(elem) {
  elem.style.display = 'block'

}
function removePage(elem) {
  elem.style.display = 'none'

}

/***export const displayPhotos = (photos) => {
  const curatedPhotos = photos.map(photos => {
    return `<img src="${photos.src.original}" alt="" id=${photos.id} />`
  }).join('')

  appElement.imageGrid.innerHTML = curatedPhotos
  // console.log(appElement.imageContainer.clientHeight)
} */