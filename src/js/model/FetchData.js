import { createClient } from "pexels";
let client = createClient('563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08')
// console.log(a)
let query = 'food';
// a.photos.search({ query, per_page: 10 }).then(photos => { console.log(photos); });
// client.photos.curated({ per_page: 1 }).then(photos => {...});
// const cors = 'https://cors-anywhere.herokuapp.com/'



export class Pictures {
    fetchCuratedPhotos() {
        try {
            const value = client.photos.search({ query, per_page: 1 })
            return value;

        } catch (error) {
            throw error

        }

    }
}

