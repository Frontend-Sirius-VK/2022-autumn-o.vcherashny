import {Photo} from '../../../photo/photo.js';

export class Post_1Photo {
    constructor() {}

    render(container) {
        const photo = new Photo(container);
        photo.render('Фото поста №1', './memes_db/mems_photo/photo_post_1.png');
    }
}
