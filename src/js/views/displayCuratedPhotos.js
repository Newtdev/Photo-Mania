import { appElement } from './base';
import axios from 'axios';


export const displayPhotos = (photos) => {

  const photoGrid = photos.photos.map(images => {

    return `
     <div class='relative'>
     <img  id=${images.id} loading="lazy" style='background-color:${images.avg_color}
      ' class="dynamic__images" />

      <div class='absolute top-0 left-0 w-full h-full overlay'>
            <a href="${images.photographer_url}" class="absolute bottom-2 left-2 text-gray-100" target="blank">${images.photographer}</a>
              </div>
     </div>
    
    `;
  }).join('');
  appElement.imageGrid.innerHTML += photoGrid;

  window.addEventListener('scroll', () => {
    // console.log(document.documentElement.offsetHeight);

    // console.log(appElement.imageGrid.scrollHeight);
    // console.log(appElement.imageGrid.clientHeight);
    // console.log(document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollHeight);
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    let scroll__height = scrollHeight - 500;
    // console.log(scroll__height);

    if (scrollTop + clientHeight === scrollHeight && photos.next_page) {

      fetchNextPage(photos.next_page);

      console.log(appElement.imageGrid.clientHeight + 'this is the window scroll height');

    }
    //else if (window.pageYOffset === appElement.imageGrid.clientHeight) {
    //   console.log(appElement.imageGrid.clientHeight + 'this is the window client height');


    // }
  });

  // if (photos.next_page) {
  //   appElement.loadMore.innerHTML = `
  //   ${photos.next_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="next">Load More</button>` : ''
  //     }
  //   `;
  //   // GET THE BUTTON ELEMENT
  //   const nextBtn = document.getElementById('next');

  //   btn(nextBtn, photos.next_page);

  // } else {
  //   appElement.loadMore.innerHTML = '';
  // }
};

// LINK TO NEXT PAGE AND THE BUTTON ELEMENT
function btn(btn, photos) {
  btn.addEventListener('click', () => {
    fetchNextPage(photos);
  });
}


// NEXT PAGE DATA HANDLING
async function fetchNextPage(url) {
  const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

  try {
    const search_images = await axios(`${url} `, {
      headers: {
        Authorization: key
      }
    });

    nextPage(search_images);

  } catch (error) {
    throw error;

  }

}

// ADD TO THE DOM
const nextPage = async (page) => {
  displayPhotos(page.data);

};

export { fetchNextPage, nextPage };
// const { scrollTop, clientheight, scrollHeight } = document.documentElement;
// console.log(scrollHeight, scrollTop, clientheight)



// let dynamic__images = document.querySelectorAll('.dynamic__images')
