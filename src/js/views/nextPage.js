// NEXT PAGE DATA HANDLING
import axios from 'axios';

export async function fetchNextPage(url) {
    const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

    try {
        const search_images = await axios(`${url} `, {
            headers: {
                Authorization: key
            }
        });

        // nextPage(search_images);
        return search_images;


    } catch (error) {
        throw error;

    }

}
