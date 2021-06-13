
export function imagesDOM(photos) {
    //src ="${images.src.original}"
    const photoGrid = photos.photos.map(images => {
        return `
    <div   class='relative dynamic__div' style='grid-row-end: span ${Math.ceil(images.height / 1000)}'>
    <img  id=${images.id} loading="lazy" style='background-color:${images.avg_color}' class="dynamic__images" />
    
    <div class='absolute top-0 left-0 w-full h-full overlay'>
    <a href="${images.photographer_url}" class="absolute bottom-2 left-4  text-gray-100" target="blank">${images.photographer}</a>
    <a href="${images.url}" class="fa fa-download absolute bottom-2 right-4 text-gray-100"></a>
    </div>
    </div>
    
    `;
    }).join('');
    return photoGrid;

}
