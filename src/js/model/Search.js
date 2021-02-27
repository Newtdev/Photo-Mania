import axios from "axios";

let key = "563492ad6f91700001000001daeef4427b934c0ba9ef6ee1f8784f08";
const searchedImages = async () => {
    try {

        let a = await axios('https://api.pexels.com/v1/search?query=people', {
            headers: {
                Authorization: key
            }
        })
    } catch (error) {
        throw error

    }
}
searchedImages();
