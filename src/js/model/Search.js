import axios from "axios";
import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08');


export const searchedImages = async (query) => {

    const images = client.photos.search({ query, per_page: 20 });

    return images;


};


// searchedImages();
export async function fetchFunt(url, key) {
    try {
        const search_images = await axios(`${url}`, {
            headers: {
                Authorization: key
            }
        });
        return search_images;

    } catch (error) {
        throw error;

    }

}
