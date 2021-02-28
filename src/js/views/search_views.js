import { appElement } from './base';

appElement.form.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // GET THE QUERY RESULTS
        // SEND TO THE APP STATE
        // ADD TO THE DOM
    })
})