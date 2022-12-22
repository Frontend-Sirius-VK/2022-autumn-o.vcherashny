export class PostButtonBlock_1 {
    constructor(containerPostButtonBlock_1) {
        this.containerPostButtonBlock_1 = containerPostButtonBlock_1;

    }

    render() {
        // Кнопка 1
        const containerButton_1_block_1 = document.createElement('div');
        containerButton_1_block_1.classList.add('containerPost1_Button_1_block_1');

        const button_1 = document.createElement('button');
        button_1.classList.add('button_1');
        button_1.innerText = 'Коментарии';

        // Кнопка 2
        const containerButton_2_block_1 = document.createElement('div');
        containerButton_2_block_1.classList.add('containerPost1_Button_2_block_1');

        const button_2 = document.createElement('button');
        button_2.classList.add('button_2');
        button_2.innerText = 'Просмотры';

        // Кнопка 3
        const containerButton_3_block_1 = document.createElement('div');
        containerButton_3_block_1.classList.add('containerPost1_Button_3_block_1');

        const button_3 = document.createElement('button');
        button_3.classList.add('button_3');
        button_3.innerText = 'Сохранили';

        // Кнопка 4
        const containerButton_4_block_1 = document.createElement('div');
        containerButton_4_block_1.classList.add('containerPost1_Button_4_block_1');

        const button_4 = document.createElement('button');
        button_4.classList.add('button_4');
        button_4.innerText = 'Поделиться';

        // Кнопка 5
        const containerButton_5_block_1 = document.createElement('div');
        containerButton_5_block_1.classList.add('containerPost1_Button_5_block_1');

        const button_5 = document.createElement('button');
        button_5.classList.add('button_5');
        button_5.innerText = 'Эмоции';
        
        // Привязываю кнопки к divам
        containerButton_1_block_1.append(button_1);
        containerButton_2_block_1.append(button_2);
        containerButton_3_block_1.append(button_3);
        containerButton_4_block_1.append(button_4);
        containerButton_5_block_1.append(button_5);
        this.containerPostButtonBlock_1.append(containerButton_1_block_1, containerButton_2_block_1, containerButton_3_block_1, containerButton_4_block_1, containerButton_5_block_1);
    }
}
