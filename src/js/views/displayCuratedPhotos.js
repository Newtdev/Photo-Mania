import { appElement } from './base';
import { getHeight } from './onscroll';
import axios from 'axios'


export const displayPhotos = (photos) => {
  console.log(photos)
  const photoGrid = photos.photos.map(images => {

    return `
    <div class='relative'>
    <img src="${images.src.original}" id=${images.id} loading="lazy" style='background-color:${images.avg_color}' class="dynamic__images" />
    </div>
    `;
  }).join('');
  appElement.imageGrid.innerHTML += photoGrid;

  let dynamic__images = document.querySelectorAll('.dynamic__images')

  // console.log(b)
  // const imageObserver = new IntersectionObserver(function (entries, observer) {
  //   entries.forEach(function (entry) {
  //     // console.log(entry)
  //     if (entry.isIntersecting) {
  //       let image = entry.target;
  //       // console.log(image);
  //       // image.style = '';
  //       image.src = image.dataset.src;
  //       // image.classList.remove("lazy");
  //       imageObserver.unobserve(image);
  //     }
  //   });
  // });

  // dynamic__images.forEach((image) => {
  //   imageObserver.observe(image);
  // });

  // appElement.imageGrid.addEventListener('scroll', (e) => {
  //   if (appElement.imageGrid.scrollTop + appElement.imageGrid.clientHeight >= appElement.imageGrid.scrollHeight && photos.next_page) {
  //     fetchTrial(photos.next_page)
  //   }
  //   // console.log(appElement.imageGrid.clientHeight)
  //   // console.log(appElement.imageGrid.scrollTop)
  //   // console.log(appElement.imageGrid.scrollHeight)
  // })

  if (photos.next_page) {
    appElement.loadMore.innerHTML = `
    ${photos.next_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="next">Load More</button>` : ''}
    `
    // btn()

    let a = document.getElementById('next')
    // console.log(a);
    btn(a, photos.next_page)
  } else {
    appElement.loadMore.innerHTML = ''
  }
}
function btn(btn, photos) {
  btn.addEventListener('click', () => {
    fetchTrial(photos)
  })
}



async function fetchTrial(url) {
  const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

  try {
    const search_images = await axios(`${url} `, {
      headers: {
        Authorization: key
      }
    })

    nextPage(search_images)

  } catch (error) {
    throw error

  }

}

const nextPage = async (page) => {
  displayPhotos(page.data);
  // console.log(page)

}


// const { scrollTop, clientheight, scrollHeight } = document.documentElement;
// console.log(scrollHeight, scrollTop, clientheight)
// lazyloadImages = document.querySelectorAll("div");
