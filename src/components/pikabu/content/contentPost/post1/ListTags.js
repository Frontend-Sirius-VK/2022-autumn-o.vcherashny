export class ListTags {
    constructor(containerListTags) {
        this.containerListTags = containerListTags;

    }

    render() {
        // Tag 1
        const containerTag1 = document.createElement('div');
        containerTag1.classList.add('containerTag1');

        const tag1 = document.createElement('a');
        tag1.classList.add('post1_tag1');
        tag1.textContent = 'tag_1'
        tag1.href = 'https://pikabu.ru/';

        // Tag 2
        const containerTag2 = document.createElement('div');
        containerTag2.classList.add('containerTag2');

        const tag2 = document.createElement('a');
        tag2.classList.add('post1_tag2');
        tag2.textContent = 'tag_2'
        tag2.href = 'https://pikabu.ru/';

        // Tag 3
        const containerTag3 = document.createElement('div');
        containerTag3.classList.add('containerTag3');

        const tag3 = document.createElement('a');
        tag3.classList.add('post1_tag3');
        tag3.textContent = 'tag_3'
        tag3.href = 'https://pikabu.ru/';
        
        // Tag 4
        const containerTag4 = document.createElement('div');
        containerTag4.classList.add('containerTag4');

        const tag4 = document.createElement('a');
        tag4.classList.add('post1_tag4');
        tag4.textContent = 'tag_4'
        tag4.href = 'https://pikabu.ru/';

        // Tag 5
        const containerTag5 = document.createElement('div');
        containerTag5.classList.add('containerTag5');

        const tag5 = document.createElement('a');
        tag5.classList.add('post1_tag5');
        tag5.textContent = 'tag_5'
        tag5.href = 'https://pikabu.ru/';
        
        containerTag1.append(tag1);
        containerTag2.append(tag2);
        containerTag3.append(tag3);
        containerTag4.append(tag4);
        containerTag5.append(tag5);
        this.containerListTags.append(containerTag1, containerTag2, containerTag3, containerTag4, containerTag5);
    }
}
