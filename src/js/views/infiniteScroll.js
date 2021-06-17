export const infiniteScroll = (funct) => {

    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5) {

            return funct;
        }

    });
}