import axios from "axios";

const url = 'https://api.pexels.com/v1/search?query=people';
const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

const searchedImages = () => {
    fetchFunt(url, key)
}
searchedImages();
export async function fetchFunt(url, key) {
    try {
        const search_images = await axios(`${url}`, {
            headers: {
                Authorization: key
            }
        })
        return search_images;

    } catch (error) {
        throw error

    }

}

