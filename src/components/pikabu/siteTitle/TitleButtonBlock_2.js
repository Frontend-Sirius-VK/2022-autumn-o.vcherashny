export class TitleButtonBlock_2 {
    constructor(containerTitleButtonBlock_2) {
        this.containerTitleButtonBlock_2 = containerTitleButtonBlock_2;
        this.button_1 = null;
        this.button_2 = null;
        this.button_3 = null;
        this.enter_VK = null;
        this.enter_Google = null;
        this.enter = null;
    }

    render() {
        // Кнопка 1
        const containerButton_1_block_2 = document.createElement('div');
        containerButton_1_block_2.classList.add('containerButton_1_block_2');

        const button_1 = document.createElement('button');
        button_1.classList.add('button_1');
        button_1.innerText = 'Поиск';

        // Кнопка 2
        const containerButton_2_block_2 = document.createElement('div');
        containerButton_2_block_2.classList.add('containerButton_2_block_2');

        const button_2 = document.createElement('button');
        button_2.classList.add('button_2');
        button_2.innerText = 'Написать';

        // Кнопка 3
        const containerButton_3_block_2 = document.createElement('div');
        containerButton_3_block_2.classList.add('containerButton_3_block_2');

        const button_3 = document.createElement('button');
        button_3.classList.add('button_3');
        button_3.innerText = 'Уведомления';

        // Кнопка 4
        const containerComboWaysToEnterTheAccoun_block_2 = document.createElement('div');
        containerComboWaysToEnterTheAccoun_block_2.classList.add('containerComboWaysToEnterTheAccoun_block_2');

        // Кнопка 5
        const containerEnter_VK_block_2 = document.createElement('div');
        containerEnter_VK_block_2.classList.add('containerEnter_VK_block_2');

        const enter_VK = document.createElement('button');
        enter_VK.classList.add('enter_VK');
        enter_VK.innerText = 'VK';

        // Кнопка 6
        const containerEnter_Google_block_2 = document.createElement('div');
        containerEnter_Google_block_2.classList.add('containerEnter_Google_block_2');

        const enter_Google = document.createElement('button');
        enter_Google.classList.add('enter_Google');
        enter_Google.innerText = 'Google';

        // Кнопка 7
        const containerEnter_block_2 = document.createElement('div');
        containerEnter_block_2.classList.add('containerEnter_block_2');

        const enter = document.createElement('button');
        enter.classList.add('enter');
        enter.innerText = 'Войти';
        
        // Привязываю кнопки к divам
        containerButton_1_block_2.append(button_1);
        containerButton_2_block_2.append(button_2);
        containerButton_3_block_2.append(button_3);
        containerEnter_VK_block_2.append(enter_VK);
        containerEnter_Google_block_2.append(enter_Google);
        containerEnter_block_2.append(enter);
        containerComboWaysToEnterTheAccoun_block_2.append(containerEnter_VK_block_2, containerEnter_Google_block_2, containerEnter_block_2);
        this.containerTitleButtonBlock_2.append(containerButton_1_block_2, containerButton_2_block_2, containerButton_3_block_2, containerComboWaysToEnterTheAccoun_block_2);
    }
}
