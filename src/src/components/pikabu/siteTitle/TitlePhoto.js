import {Photo} from '../photo/photo.js';

export class TitlePhoto {
    constructor() {
        
    }

    render(container) {
        const photo = new Photo(container);
        photo.render('Фото сайта', './pikabu_photo_1.png');
    }
}
