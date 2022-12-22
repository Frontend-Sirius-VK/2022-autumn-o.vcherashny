import {TitlePhoto} from './TitlePhoto.js';
import {HeaderMenu} from './HeaderMenu.js';
import {RegistrationMenu} from './RegistrationMenu.js';

export class TitlePikabu {
    constructor(containerTitleMain) {
        this.containerTitleMain = containerTitleMain;
        this.titlePhoto = null;
        this.headerMenu = null;
        this.registrationMenu = null;
    }

    render() {
        // Логотип сайта
        const containerTitlePhoto = document.createElement('div');
        containerTitlePhoto.classList.add('containerTitlePhoto');
        this.titlePhoto = new TitlePhoto(containerTitlePhoto);
        this.titlePhoto.render();

        // Меню заголовка
        const containerHeaderMenu = document.createElement('div');
        containerHeaderMenu.classList.add('containerHeaderMenu');
        this.headerMenu = new HeaderMenu(containerHeaderMenu);
        this.headerMenu.render();

        // Меню регистрации
        const containerRegistrationMenu = document.createElement('div');
        containerRegistrationMenu.classList.add('containerRegistrationMenu');
        this.registrationMenu = new RegistrationMenu(containerRegistrationMenu);
        this.registrationMenu.render();


        this.containerTitleMain.append(containerTitlePhoto, containerHeaderMenu, containerRegistrationMenu);
    }
}
