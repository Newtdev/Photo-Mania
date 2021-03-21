import axios from "axios";

import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08');
// const query = 'Nature';


// const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

export const searchedImages = async (query) => {

    const images = client.photos.search({ query, per_page: 50 });
    // console.log(images);
    return images;

    // const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

    // return fetchFunt(url, key);

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
