export class TitleButtonBlock_1 {
    constructor(containerTitleButtonBlock_1) {
        this.containerTitleButtonBlock_1 = containerTitleButtonBlock_1;
        this.button_1 = null;
        this.button_2 = null;
        this.button_3 = null;
        this.button_4 = null;
        this.button_5 = null;
        this.button_6 = null;
        this.button_7 = null;
    }

    render() {
        // Кнопка 1
        const containerButton_1_block_1 = document.createElement('div');
        containerButton_1_block_1.classList.add('containerButton_1_block_1');

        const button_1 = document.createElement('button');
        button_1.classList.add('button_1');
        button_1.innerText = 'Горячее';

        // Кнопка 2
        const containerButton_2_block_1 = document.createElement('div');
        containerButton_2_block_1.classList.add('containerButton_2_block_1');

        const button_2 = document.createElement('button');
        button_2.classList.add('button_2');
        button_2.innerText = 'Лучшее';

        // Кнопка 3
        const containerButton_3_block_1 = document.createElement('div');
        containerButton_3_block_1.classList.add('containerButton_3_block_1');

        const button_3 = document.createElement('button');
        button_3.classList.add('button_3');
        button_3.innerText = 'Свежее';

        // Кнопка 4
        const containerButton_4_block_1 = document.createElement('div');
        containerButton_4_block_1.classList.add('containerButton_4_block_1');

        const button_4 = document.createElement('button');
        button_4.classList.add('button_4');
        button_4.innerText = 'Подписки';

        // Кнопка 5
        const containerButton_5_block_1 = document.createElement('div');
        containerButton_5_block_1.classList.add('containerButton_5_block_1');

        const button_5 = document.createElement('button');
        button_5.classList.add('button_5');
        button_5.innerText = 'Сообщества';

        // Кнопка 6
        const containerButton_6_block_1 = document.createElement('div');
        containerButton_6_block_1.classList.add('containerButton_6_block_1');

        const button_6 = document.createElement('button');
        button_6.classList.add('button_6');
        button_6.innerText = 'Блоги';

        // Кнопка 7
        const containerButton_7_block_1 = document.createElement('div');
        containerButton_7_block_1.classList.add('containerButton_7_block_1');

        const button_7 = document.createElement('button');
        button_7.classList.add('button_7');
        button_7.innerText = 'Курсы';
        
        // Привязываю кнопки к divам
        containerButton_1_block_1.append(button_1);
        containerButton_2_block_1.append(button_2);
        containerButton_3_block_1.append(button_3);
        containerButton_4_block_1.append(button_4);
        containerButton_5_block_1.append(button_5);
        containerButton_6_block_1.append(button_6);
        containerButton_7_block_1.append(button_7);
        this.containerTitleButtonBlock_1.append(containerButton_1_block_1, containerButton_2_block_1, containerButton_3_block_1, containerButton_4_block_1, containerButton_5_block_1, containerButton_6_block_1, containerButton_7_block_1);
    }
}
