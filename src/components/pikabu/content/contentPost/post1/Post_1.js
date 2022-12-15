import {PostPhoto} from './PostPhoto.js';

export class Post_1 {
    constructor(containerPost_1) {
        this.containerPost_1 = containerPost_1;
        this.postText = null;
        this.postPhoto = null;
    }

    render() {
        const containerPostText = document.createElement('div');
        containerPostText.classList.add('containerPostText');
        containerPostText.textContent = 'Post_1';

        const containerPostPhoto = document.createElement('div');
        containerPostPhoto.classList.add('containerPostPhoto');
        this.postPhoto = new PostPhoto();
        this.postPhoto.render(containerPostPhoto);

        this.containerPost_1.append(containerPostText, containerPostPhoto);
    }
}