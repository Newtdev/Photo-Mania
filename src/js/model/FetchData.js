import { createClient } from "pexels";
import { fetchFunt } from './Search';
let client = createClient('563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08');

export class Pictures {
    fetchCuratedPhotos() {
        try {
            const value = client.photos.curated({ per_page: 20 });
            return value;

        } catch (error) {
            throw error;

        }

    }
}


