export class HeaderMenu {
    constructor(containerHeaderMenu) {
        this.containerHeaderMenu = containerHeaderMenu;
        this.headerMenuParagraph1 = null;
        this.headerMenuParagraph2 = null;
        this.headerMenuParagraph3 = null;
        this.headerMenuParagraph4 = null;
        this.headerMenuParagraph5 = null;
        this.headerMenuParagraph6 = null;
        this.headerMenuParagraph7 = null;
    }

    render() {
    // Горячее
        const containerHeaderMenuParagraph1 = document.createElement('div');
        containerHeaderMenuParagraph1.classList.add('containerHeaderMenuParagraph1');
        this.headerMenuParagraph1 = document.createElement('a');
        this.headerMenuParagraph1.classList.add('headerMenuParagraph1');
        this.headerMenuParagraph1.textContent = 'Горячее';
        this.headerMenuParagraph1.href = 'https://pikabu.ru/';

    // Лучшее
        const containerHeaderMenuParagraph2 = document.createElement('div');
        containerHeaderMenuParagraph2.classList.add('containerHeaderMenuParagraph2');
        this.headerMenuParagraph2 = document.createElement('a');
        this.headerMenuParagraph2.classList.add('headerMenuParagraph2');
        this.headerMenuParagraph2.textContent = 'Лучшее';
        this.headerMenuParagraph2.href = 'https://pikabu.ru/best';

    // Свежее
        const containerHeaderMenuParagraph3 = document.createElement('div');
        containerHeaderMenuParagraph3.classList.add('containerHeaderMenuParagraph3');
        this.headerMenuParagraph3 = document.createElement('a');
        this.headerMenuParagraph3.classList.add('headerMenuParagraph3');
        this.headerMenuParagraph3.textContent = 'Свежее';
        this.headerMenuParagraph3.href = 'https://pikabu.ru/new';

    // Подписки
        const containerHeaderMenuParagraph4 = document.createElement('div');
        containerHeaderMenuParagraph4.classList.add('containerHeaderMenuParagraph4');
        this.headerMenuParagraph4 = document.createElement('a');
        this.headerMenuParagraph4.classList.add('headerMenuParagraph4');
        this.headerMenuParagraph4.textContent = 'Подписки';
        this.headerMenuParagraph4.href = 'https://pikabu.ru/subs';

    // Сообщества
        const containerHeaderMenuParagraph5 = document.createElement('div');
        containerHeaderMenuParagraph5.classList.add('containerHeaderMenuParagraph5');
        this.headerMenuParagraph5 = document.createElement('a');
        this.headerMenuParagraph5.classList.add('headerMenuParagraph5');
        this.headerMenuParagraph5.textContent = 'Сообщества';
        this.headerMenuParagraph5.href = 'https://pikabu.ru/communities';

    // Блоги
        const containerHeaderMenuParagraph6 = document.createElement('div');
        containerHeaderMenuParagraph6.classList.add('containerHeaderMenuParagraph6');
        this.headerMenuParagraph6 = document.createElement('a');
        this.headerMenuParagraph6.classList.add('headerMenuParagraph6');
        this.headerMenuParagraph6.textContent = 'Блоги';
        this.headerMenuParagraph6.href = 'https://pikabu.ru/companies';

    // Курсы
        const containerHeaderMenuParagraph7 = document.createElement('div');
        containerHeaderMenuParagraph7.classList.add('containerHeaderMenuParagraph7');
        this.headerMenuParagraph7 = document.createElement('a');
        this.headerMenuParagraph7.classList.add('headerMenuParagraph7');
        this.headerMenuParagraph7.textContent = 'Курсы';
        this.headerMenuParagraph7.href = 'https://study.pikabu.ru/?utm_source=topcourses';

    // Размещаем элементы в менюшке
        containerHeaderMenuParagraph1.append(this.headerMenuParagraph1);
        containerHeaderMenuParagraph2.append(this.headerMenuParagraph2);
        containerHeaderMenuParagraph3.append(this.headerMenuParagraph3);
        containerHeaderMenuParagraph4.append(this.headerMenuParagraph4);
        containerHeaderMenuParagraph5.append(this.headerMenuParagraph5);
        containerHeaderMenuParagraph6.append(this.headerMenuParagraph6);
        containerHeaderMenuParagraph7.append(this.headerMenuParagraph7);
        this.containerHeaderMenu.append(containerHeaderMenuParagraph1, containerHeaderMenuParagraph2, containerHeaderMenuParagraph3, containerHeaderMenuParagraph4, containerHeaderMenuParagraph5, containerHeaderMenuParagraph6, containerHeaderMenuParagraph7);
    }
}