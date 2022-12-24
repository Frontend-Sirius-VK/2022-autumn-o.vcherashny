import {Post_1Photo} from './Post_1Photo.js';

export class Post_1 {
    constructor(containerPost_1) {
        this.containerPost_1 = containerPost_1;
        this.postText = null;
        this.Post_1Photo = null;
    }

    render() {
        const containerPost_1Text = document.createElement('div');
        containerPost_1Text.classList.add('containerPost_1Text');
        containerPost_1Text.textContent = 'Самая обычная ситуация';

        const containerPost_1Photo = document.createElement('div');
        containerPost_1Photo.classList.add('containerPost_1Photo');
        this.Post_1Photo = new Post_1Photo();
        this.Post_1Photo.render(containerPost_1Photo);

        this.containerPost_1.append(containerPost_1Text, containerPost_1Photo);
    }
}
