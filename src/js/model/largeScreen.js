import axios from 'axios';
import { fetchFunt } from './Search';

const key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";

const fetchGetPhoto = async (id) => {
    const url = `https://api.pexels.com/v1/photos/${id}`;
    const savedFetchFunt = await fetchFunt(url, key);
    return savedFetchFunt;
};
export { fetchGetPhoto };


