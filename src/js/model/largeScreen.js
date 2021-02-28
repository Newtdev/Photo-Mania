import axios from 'axios';
import { fetchFunt } from './Search';

const url = `https://api.pexels.com/v1/photos/3483966`;
const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

const fetchGetPhoto = async () => {
    fetchFunt(url, key)
    console.log(await fetchFunt(url, key))
}
fetchGetPhoto()

// searchedImages(url)

// const fetchGetPhoto = async (id) => {
//     try {
//         console.log(getPhoto)

//     } catch (error) {
//         throw error

//     }

// }
// fetchGetPhoto()