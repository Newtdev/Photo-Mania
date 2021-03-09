import { appElement } from './base';
import { getHeight } from './onscroll';
// "build": "tailwind build src/style.css -o dist/style.css",
// export const displayPhotos = (photos) => {
//   return `<div id= ${photos.id}>
//         </div>`
// }
export const displayPhotos = (photos) => {

  const photoGrid = photos.photos.map(images => {

    return `
    <div class='relative'>
    <img src="${images.src.original}" alt="" id=${images.id} />
    </div>
    `;
  }).join('');

  // console.log(photoGrid)
  appElement.imageGrid.innerHTML = photoGrid;

  if (photos.prev_page || photos.next_page) {
    appElement.loadMore.innerHTML = `
        ${photos.prev_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="prev" onclick="logNext('${photos.prev_page}')"> prev</button>` : ''

      }
      
      ${photos.next_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id='next' onclick="logNext('${photos.next_page}')"> 
        button
        </button>` : ''
      }     
      `
  }


}

// const nextPage = (page) => {
//   // console.log(page)
//   if (page.prev_page || page.next_page) {

//     appElement.loadMore.innerHTML = `
//     ${page.prev_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="prev" onclick="logNext('${page.prev_page}')"> prev</button>` : ''

//     }

//     ${
//       page.next_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id='next' onclick="logNext('${page.next_page}')"> 
//         button
//         </button>` : ''
//     }
//     `;

//   } else {
//     appElement.loadMore.innerHTML = '';
//   }
//   // handlePromise(page)
//   // logNext()

// }


// /***export const displayPhotos = (photos) => {
//   const curatedPhotos = photos.map(photos => {
//     return `< img src = "${photos.src.original}" alt = "" id = ${ photos.id } />`
//   }).join('')

//   appElement.imageGrid.innerHTML = curatedPhotos
//   // console.log(appElement.imageContainer.clientHeight)
// } * /