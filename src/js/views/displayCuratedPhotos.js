import { appElement } from './base';
import { imagesDOM } from './ImageDOM';
import { fetchNextPage } from './nextPage';


export const displayPhotos = (photos) => {
  appElement.imageGrid.innerHTML += imagesDOM(photos);

};
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    handleFetchPage(photos.next_page);
  }

});





// LINK TO NEXT PAGE AND THE BUTTON ELEMENT

const handleFetchPage = async (next) => {
  const data = await fetchNextPage(next);
  addLoader(data.data);
};
appElement.curatedLoader.classList.add('show');



const addLoader = (photos) => {


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

