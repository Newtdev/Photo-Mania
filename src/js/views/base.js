export const appElement = {
    theme: document.querySelector('.theme__image'),
    body: document.querySelector('body'),
    topForm: document.querySelector('.top__form'),
    gridContainer: document.getElementById('grid'),
    form: document.querySelectorAll('form')
}

appElement.form.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // GET THE QUERY RESULTS
        // SEND TO THE APP STATE
        // ADD TO THE DOM
    })
})