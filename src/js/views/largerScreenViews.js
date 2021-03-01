import { appElement } from './base';

const displayLargePhoto = (data) => {
  // const largePhoto = document.createElement('div');
  // largePhoto.classList.add('image_container', 'w-full', 'flex', 'items-center', 'justify-center')
  // let markup = `<img
  // src=${data.src.original}
  // id="${data.id}"
  // />


  const largePhoto = data.map(photo => {
    return `<img
  src=${photo.src.original}
  id="${photo.id}"
  />`
  }).join('')
  appElement.largeImageContainer.innerHTML = largePhoto;

}

export { displayLargePhoto }

const emptyImage = (large_photo) => {

  appElement.largeImage.addEventListener('click', (e) => {
    const targeted = e.target;

    if (targeted.classList.contains('close')) {

      appElement.largeImage.classList.remove('large__visible');

      large_photo.length == 1 ? large_photo.pop() : large_photo.unshift()

    }

  });
}

export { emptyImage }
