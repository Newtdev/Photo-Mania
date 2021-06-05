import { appElement } from './base';
import { fetchNextPage } from './displayCuratedPhotos';
import { addLoader } from './search_views';


export const displaySearchPhotos = (photos) => {

    const photoGrid = photos.photos.map(images => {
        return `
        <div class='relative'>
        <img src="${images.src.original}" loading="lazy" style="background-color:${images.avg_color}" id=${images.id} />
        <div class='absolute top-0 left-0 w-full h-full overlay'>
            <a href="${images.potographer_url}" class="absolute bottom-2 left-4  text-gray-300" target="blank">${images.photographer}</a>
            <a href="${images.url}" class="fa fa-download absolute bottom-2 right-4 text-red-500"></a>
              </div>
     </div>
        </div>
    `;
    }).join('');

    appElement.searchedGrid.innerHTML = photoGrid;


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

    // PAGINATION SECTION OF SEARCH PAGE
    // if (photos.next_page || photos.prev_page) {

    //     appElement.pagination.innerHTML = `
    //     ${photos.prev_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more prev">Prev</button>` : ''}

    //     ${photos.next_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more next">Next</button>` : ''}

    //     `;
    //     const loadMore = document.querySelectorAll('.load__more');

    //     allButton(loadMore, photos);

    // } else appElement.pagination.innerHTML = '';

    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight === scrollHeight && photos.next_page) {

            // fetchNextPage(photos.next_page)
            getPage(photos.next_page);



        }

    });


};


// GET PREV OR NEXT BUTTON WHEN THE IMAGE LOADS
// const allButton = (buttons, pageNumber) => {
//     buttons.forEach(btns => {
//         btns.addEventListener('click', (e) => {
//             const targetButtons = e.currentTarget.classList;
//             if (targetButtons.contains('next')) {

//                 // GET THE NEXT PAGE


//             } else if (targetButtons.contains('prev')) {

//                 // GET THE PREV PAGE
//                 getPage(pageNumber.prev_page);


//             }
//         });
//     });

// };

const getPage = async (page) => {
    const pageData = await fetchNextPage(page);
};