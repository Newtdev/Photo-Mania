import { appElement } from './base';
import { fetchNextPage } from './nextPage';
import { imagesDOM } from './ImageDOM';
import { getHeight } from './onscroll';
import { infiniteScroll } from './infiniteScroll';

getHeight();


export const displaySearchPhotos = (photos) => {
    appElement.searchedGrid.innerHTML = imagesDOM(photos);
    infiniteScroll(getPage(photos.next_page));

};



const getPage = async (page) => {
    const pageData = await fetchNextPage(page);
    const { data } = pageData;
    setTimeout(() => {

        displaySearchPhotos(data);
    }, 1000);
};




    // const photoGrid = photos.photos.map(images => {
    //     return `
    //     <div class='relative'>
    //     <img src="${images.src.original}" loading="lazy" style="background-color:${images.avg_color}" id=${images.id} />
    //     <div class='absolute top-0 left-0 w-full h-full overlay'>
    //         <a href="${images.potographer_url}" class="absolute bottom-2 left-4  text-gray-300" target="blank">${images.photographer}</a>
    //         <a href="${images.url}" class="fa fa-download absolute bottom-2 right-4 text-red-500"></a>
    //           </div>
    //  </div>
    //     </div>
    // `;
    // }).join('');

    // appElement.searchedGrid.innerHTML = photoGrid;


    // let lazyloadImages = document.querySelectorAll(".relative");

    // const imageObserver = new IntersectionObserver(function (entries, observer) {
    //     entries.forEach(function (entry) {
    //         if (entry.isIntersecting) {
    //             let image = entry.target;
    //             image.src = image.dataset.src;
    //             // image.classList.remove("lazy");
    //             imageObserver.unobserve(image);
    //         }
    //     });
    // });

    // lazyloadImages.forEach((image) => {
    //     imageObserver.observe(image);
    // });
