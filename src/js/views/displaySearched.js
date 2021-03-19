
import { appElement } from './base';
import axios from 'axios';
// import { fetchNextPage } from './displayCuratedPhotos';

export const displaySearchPhotos = (photos) => {

    const photoGrid = photos.photos.map(images => {
        return `
        <div class='relative'>
        <img  loading='lazy' style="background-color:${images.avg_color}" id=${images.id} />
        <div class='absolute top-0 left-0 w-full h-full overlay'>
            <a href="${images.photographer_url}" class="absolute bottom-2 left-2 text-gray-100" target="blank">${images.photographer}</a>
              </div>
        </div>
    `;
    }).join('');

    appElement.searchedGrid.innerHTML = photoGrid;


    // lazyloadImages = document.querySelectorAll("div");

    // const imageObserver = new IntersectionObserver(function (entries, observer) {
    //     entries.forEach(function (entry) {
    //         // console.log(entry)
    //         if (entry.isIntersecting) {
    //             let image = entry.target;
    //             // console.log(image);
    //             // image.style = '';
    //             image.src = image.dataset.src;
    //             // image.classList.remove("lazy");
    //             imageObserver.unobserve(image);
    //         }
    //     });
    // });

    // dynamic__images.forEach((image) => {
    //     imageObserver.observe(image);
    // });

    // PAGINATION SECTION OF SEARCH PAGE
    if (photos.next_page || photos.prev_page) {

        appElement.pagination.innerHTML = `
        ${photos.prev_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="prev">Prev</button>` : ''}
        
        ${photos.next_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="next">Next</button>` : ''}
        
        `;
        const loadMore = document.querySelectorAll('.load__more');

        allButton(loadMore, photos);

    } else appElement.pagination.innerHTML = '';


};

// GET PREV OR NEXT BUTTON WHEN THE IMAGE LOADS
const allButton = (buttons, pageNumber) => {
    buttons.forEach(btns => {
        btns.addEventListener('click', (e) => {
            const targetButtons = e.currentTarget.id;
            if (targetButtons === 'next') {
                // GET THE NEXT PAGE

                // const NextPage = document.getElementById(targetButtons);
                // console.log(pageNumber.next_page);
                // handleSearchPag(pageNumber.next_page);
                fetchPage(pageNumber);
            } else {


                // GET THE PREV PAGE
                // const PrevPage = document.getElementById(targetButtons);

                // fetchNextPage(pageNumber.prev_page);


            }
        });
    });

};
