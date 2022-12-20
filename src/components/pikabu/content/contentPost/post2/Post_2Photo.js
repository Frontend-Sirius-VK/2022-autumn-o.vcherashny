import {Photo} from '../../../photo/photo.js';

export class Post_2Photo {
    constructor() {}

    render(container) {
        const photo = new Photo(container);
        photo.render('Фото поста №2', './photo_post_2.png');
    }
}
