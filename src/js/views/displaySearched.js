
import { appElement } from './base';
import { nextPage, fetchNextPage } from './displayCuratedPhotos';

export const displaySearchPhotos = (photos) => {
    const photoGrid = photos.map(images => {
        return `
        <div class='relative'>
        <img data-src="${images.src.original}" style="fliter:blur()" id=${images.id} />
        </div>
    `;
    }).join('')

    // console.log(photoGrid)
    appElement.searchedGrid.innerHTML = photoGrid;

    lazyloadImages = document.querySelectorAll("div");

    const imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            // console.log(entry)
            if (entry.isIntersecting) {
                let image = entry.target;
                // console.log(image);
                // image.style = '';
                image.src = image.dataset.src;
                // image.classList.remove("lazy");
                imageObserver.unobserve(image);
            }
        });
    });

    dynamic__images.forEach((image) => {
        imageObserver.observe(image);
    });

    // PAGINATION SECTION OF SEARCH PAGE

    if (photos.prev_page || photos.next_page) {

        appElement.loadMore.innerHTML = `${photos.prev_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="prev">Prev</button>` : ''}

        ${photos.prev_page ? `<button type="button" class="p-4 mx-1 bg-red-900 mt-4 text-lg text-white text-bold shadow-sm rounded-sm hover:bg-red-500 transition-all load__more" id="next">Next</button>` : ''}
        `
        allButton(load__more, photos)
    } else appElement.loadMore.innerHTML = ''
}

// GET PREV OR NEXT BUTTON WHEN THE IMAGE LOADS
const allButton = (buttons, pageNumber) => {
    buttons.forEach(btns => {
        btns.addEventListener('click', (e) => {
            const targetButtons = e.currentTarget.id;
            if (targetButtons === 'next') {
                // GET THE NEXT PAGE

                const NextPage = document.getElementById(targetButtons);

                fetchNextPage(pageNumber.next_page)
            } else {


                // GET THE PREV PAGE
                const PrevPage = document.getElementById(targetButtons);

                fetchNextPage(pageNumber.prev_page)

            }
        })
    })

}

// DISPLAY TO THE DOM AND CONTINUE THE CIRCLE
// const newPages = (page) => {
//     displaySearchPhotos(page.data)
// }
