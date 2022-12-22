export class RegistrationMenu {
    constructor(containerRegistrationMenu) {
        this.containerRegistrationMenu = containerRegistrationMenu;
        this.registrationMenuButton1 = null;
        this.registrationMenuButton2 = null;
        this.registrationMenuButton3 = null;
        this.enterVK = null;
        this.enterGoogle = null;
        this.enter = null;
    }

    render() {
    // Поиск
        const containerRegistrationMenuButton1 = document.createElement('div');
        containerRegistrationMenuButton1.classList.add('containerTitleRegistrationMenuButton1');
        this.registrationMenuButton1 = document.createElement('button');
        this.registrationMenuButton1.classList.add('registrationMenuButton1');
        this.registrationMenuButton1 = document.createElement('img');
        this.registrationMenuButton1.src = './button_icons/search.png';

    // Написать
        const containerRegistrationMenuButton2 = document.createElement('div');
        containerRegistrationMenuButton2.classList.add('containerTitleRegistrationMenuButton2');
        this.registrationMenuButton2 = document.createElement('button');
        this.registrationMenuButton2.classList.add('registrationMenuButton2');
        this.registrationMenuButton2 = document.createElement('img');
        this.registrationMenuButton2.src = './button_icons/pen.png';

    // Уведомления
        const containerRegistrationMenuButton3 = document.createElement('div');
        containerRegistrationMenuButton3.classList.add('containerTitleRegistrationMenuButton3');
        this.registrationMenuButton3 = document.createElement('button');
        this.registrationMenuButton3.classList.add('registrationMenuButton3');
        this.registrationMenuButton3 = document.createElement('img');
        this.registrationMenuButton3.src = './button_icons/bell.png';

    // Способы входа в аккаунт
        const containerComboWaysToEnterTheAccoun = document.createElement('div');
        containerComboWaysToEnterTheAccoun.classList.add('containerTitleComboWaysToEnterTheAccoun');

    // enterVK
        const containerEnterVK = document.createElement('div');
        containerEnterVK.classList.add('containerTitleEnterVK');
        this.enterVK = document.createElement('button');
        this.enterVK.classList.add('enterVK');
        this.enterVK = document.createElement('img');
        this.enterVK.src = './button_icons/vk-social-network-logo.png';

    // enterGoogle
        const containerEnterGoogle = document.createElement('div');
        containerEnterGoogle.classList.add('containerTitleEnterGoogle');
        this.enterGoogle = document.createElement('button');
        this.enterGoogle.classList.add('enterGoogle');
        this.enterGoogle = document.createElement('img');
        this.enterGoogle.src = './button_icons/google-glass-logo.png';

    // enter
        const containerEnter = document.createElement('div');
        containerEnter.classList.add('containerTitleEnter');
        this.enter = document.createElement('button');
        this.enter.classList.add('enter');
        this.enter.innerText = 'Войти';
        
    // Размещаем элементы в менюшке для регестрации
        containerRegistrationMenuButton1.append(this.registrationMenuButton1);
        containerRegistrationMenuButton2.append(this.registrationMenuButton2);
        containerRegistrationMenuButton3.append(this.registrationMenuButton3);
        containerEnterVK.append(this.enterVK);
        containerEnterGoogle.append(this.enterGoogle);
        containerEnter.append(this.enter);
        containerComboWaysToEnterTheAccoun.append(containerEnterVK, containerEnterGoogle, containerEnter);
        this.containerRegistrationMenu.append(containerRegistrationMenuButton1, containerRegistrationMenuButton2, containerRegistrationMenuButton3, containerComboWaysToEnterTheAccoun);
    }
}
