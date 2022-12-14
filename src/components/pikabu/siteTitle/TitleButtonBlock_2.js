export class TitleButtonBlock_2 {
    onstructor(containerTitleButtonBlock_2) {
        this.containerTitleButtonBlock_2 = containerTitleButtonBlock_2;
        this.button_1 = null;
        this.button_2 = null;
        this.button_3 = null;
        this.comboWaysToEnterTheAccoun = null;
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
        button_1.innerText = 'text_1';

        // Кнопка 2
        const containerButton_2_block_2 = document.createElement('div');
        containerButton_2_block_2.classList.add('containerButton_2_block_2');

        const button_2 = document.createElement('button');
        button_2.classList.add('button_2');
        button_2.innerText = 'text_2';

        // Кнопка 3
        const containerButton_3_block_2 = document.createElement('div');
        containerButton_3_block_2.classList.add('containerButton_3_block_2');

        const button_3 = document.createElement('button');
        button_3.classList.add('button_3');
        button_3.innerText = 'text_3';

        containerButton_1_block_2.append(button_1);
        containerButton_2_block_2.append(button_2);
        containerButton_3_block_2.append(button_3);
        this.containerTitleButtonBlock_2.append(containerButton_1_block_2, containerButton_2_block_2, containerButton_3_block_2);
    }
}