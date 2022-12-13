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
        // div для кнопки 1
        const containerButton_1 = document.createElement('div');
        containerButton_1.classList.add('containerButton_1');
        
        // div для кнопки 2
        const containerButton_2 = document.createElement('div');
        containerButton_2.classList.add('containerButton_2');
        
        // div для кнопки 3
        const containerButton_3 = document.createElement('div');
        containerButton_3.classList.add('containerButton_3');

        // комбо способов для входа в акаунт
        const containerComboWaysToEnterTheAccount = document.createElement('div');
        containerComboWaysToEnterTheAccount.classList.add('containerComboWaysToEnterTheAccount');
        
        // div для входа через VK
        const containerEnter_VK = document.createElement('div');
        containerEnter_VK.classList.add('containerEnter_VK');
        // div для входа через Google
        const containerEnter_Google = document.createElement('div');
        containerEnter_Google.classList.add('containerEnter_Google');

        // div для входа
        const containerEnter = document.createElement('div');
        containerEnter.classList.add('containerEnter');
        
        this.containerComboWaysToEnterTheAccount.append(containerEnter_VK, containerEnter_Google, containerEnter);
        this.containerTitleButtonBlock_2.append(containerButton_1, containerButton_2, containerButton_3, containerComboWaysToEnterTheAccount);
    }
}