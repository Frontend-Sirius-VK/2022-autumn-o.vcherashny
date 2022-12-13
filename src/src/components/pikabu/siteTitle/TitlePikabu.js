import {TitlePhoto} from './TitlePhoto.js';
import {TitleButtonBlock_1} from './TitleButtonBlock_1.js';
import {TitleButtonBlock_2} from './TitleButtonBlock_2.js';

export class TitlePikabu {
    constructor(containerTitleMain) {
        this.containerTitleMain = containerTitleMain;
        this.titlePhoto = null;
        this.titleButtonBlock_1 = null;
        // this.titleButtonBlock_2 = null;
    }

    render() {
        // Основной div заголовка
        const containerTitle = document.createElement('div');
        containerTitle.classList.add('containerTitle');
        this.titlePhoto = new TitlePhoto();
        // const

        // div для фото
        const containerTitlePhoto = document.createElement('div');
        containerTitlePhoto.classList.add('containerTitlePhoto');
        

        const containerButtonsBlock1 = document.createElement('div');
        containerButtonsBlock1.classList.add('containerButtonsBlock1');
        this.titleButtonBlock_1 = new TitleButtonBlock_1();

        const containerButton = document.createElement('div');
        this.containerButton.classList.add('containerButton');

        containerTitle.append(containerTitlePhoto, containerButtonsBlock1);
        this.titlePhoto.render(containerTitlePhoto);
        this.containerButtonsBlock1.render(containerButton);

        this.containerTitleMain.append(containerTitle);
    }
}
