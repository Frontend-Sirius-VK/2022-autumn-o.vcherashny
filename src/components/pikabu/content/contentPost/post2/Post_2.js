import {Post_2Photo} from './Post_2Photo.js';

export class Post_2 {
    constructor(containerPost_2) {
        this.containerPost_2 = containerPost_2;
        this.postText = null;
        this.Post_2Photo = null;
    }

    render() {
        const containerPost_2Text = document.createElement('div');
        containerPost_2Text.classList.add('containerPost_2Text');
        containerPost_2Text.textContent = 'Примерно так я работаю на РПМ :(';

        const containerPost_2Photo = document.createElement('div');
        containerPost_2Photo.classList.add('containerPost_2Photo');
        this.Post_2Photo = new Post_2Photo();
        this.Post_2Photo.render(containerPost_2Photo);

        this.containerPost_2.append(containerPost_2Text, containerPost_2Photo);
    }
}
