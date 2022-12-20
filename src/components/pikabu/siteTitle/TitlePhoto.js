import {Photo} from '../photo/photo.js';

export class TitlePhoto {
    constructor(containerTitlePhoto) {
        this.containerTitlePhoto = containerTitlePhoto
    }

    render() {
        const photo = new Photo(this.containerTitlePhoto);
        photo.render('Фото сайта', './pikabu_photo_1.png');
    }
}
