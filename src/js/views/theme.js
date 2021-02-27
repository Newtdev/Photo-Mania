import { appElement } from './base';

// CHANGE BODY BACKGROUND COLOR FROM DARK TO LIGHT
appElement.theme.addEventListener('click', (e) => {
    let curr = e.currentTarget;
    if (curr) {
        appElement.body.classList.toggle('light');
    }

})
