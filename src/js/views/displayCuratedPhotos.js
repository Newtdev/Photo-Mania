import { appElement } from './base';
import axios from 'axios';
import { addLoader } from './search_views';


export const displayPhotos = (photos) => {

  const photoGrid = photos.photos.map(images => {

    return `
     <div class='relative'>
     <img src="${images.src.original}" id=${images.id} loading="lazy" style='background-color:${images.avg_color}
      ' class="dynamic__images" />

      <div class='absolute top-0 left-0 w-full h-full overlay'>
            <a href="${images.photographer_url}" class="absolute bottom-2 left-2 text-gray-100" target="blank">${images.photographer}</a>
              </div>
     </div>
    
    `;
  }).join('');
  appElement.imageGrid.innerHTML += photoGrid;

  // INFINITE SCROLL FUNCTIONALITY
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight === scrollHeight && photos.next_page) {

      // fetchNextPage(photos.next_page)
      handleFetchPage(photos.next_page);


    }

  });

};

// LINK TO NEXT PAGE AND THE BUTTON ELEMENT

const handleFetchPage = async (next) => {
  const data = await fetchNextPage(next);
  // console.log(data);
  addLoader(data.data);


};

// NEXT PAGE DATA HANDLING
async function fetchNextPage(url) {
  const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

  try {
    const search_images = await axios(`${url} `, {
      headers: {
        Authorization: key
      }
    });

    // nextPage(search_images);
    return search_images;


  } catch (error) {
    throw error;

  }

}

// ADD TO THE DOM
const nextPage = async (page) => {
  return page;

};

export { fetchNextPage, nextPage };

