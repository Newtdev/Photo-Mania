import { appElement } from './base';
import { imagesDOM } from './ImageDOM';
import { fetchNextPage } from './nextPage';
import { InfiniteScroll } from './onscroll';

export const displayPhotos = (photos) => {
  appElement.imageGrid.innerHTML += imagesDOM(photos);

  const forFetch = handleFetchPage(photos.next_page);
  // INFINITE SCROLL FUNCTIONALITY
  InfiniteScroll(forFetch);
};





// LINK TO NEXT PAGE AND THE BUTTON ELEMENT

const handleFetchPage = async (next) => {
  const data = await fetchNextPage(next);

  addLoader(data.data);
};



const addLoader = (photos) => {
  appElement.curatedLoader.classList.add('show');
  // console.log(photos);
  setTimeout(() => {
    appElement.curatedLoader.classList.remove('show');
    setTimeout(() => {
      displayPhotos(photos);
    });

  }, 4000);
};


// ADD TO THE DOM
// const nextPage = async (page) => {
//   return page;

// };

// export { fetchNextPage, nextPage };

