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
        const containerTitlePhoto = document.createElement('div');
        containerTitlePhoto.classList.add('containerTitlePhoto');        
        this.titlePhoto = new TitlePhoto();
        this.titlePhoto.render(containerTitlePhoto);

        const containerButtonsBlock_1 = document.createElement('div');
        containerButtonsBlock_1.classList.add('containerButtonsBlock_1');
        this.titleButtonBlock_1 = new TitleButtonBlock_1(containerButtonsBlock_1);
        this.titleButtonBlock_1.render(containerButtonsBlock_1);

        this.containerTitleMain.append(containerTitlePhoto, containerButtonsBlock_1);
    }
}
