import axios from "axios";

const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

export const searchedImages = async (query) => {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=5`;
    // "https://api.pexels.com/v1/search?query=nature&per_page=1"

    console.log(await fetchFunt(url, key))

}
// searchedImages();
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
