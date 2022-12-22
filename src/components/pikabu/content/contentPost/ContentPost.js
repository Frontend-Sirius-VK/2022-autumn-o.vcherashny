import {Post_1} from './post1/Post_1.js';

export class ContentPost {
    constructor(containerContentPost) {
        this.containerContentPost = containerContentPost;
        this.post_1 = null;
        this.post_2 = null;
    }

    render() {
        const containerPost_1 = document.createElement('div');
        containerPost_1.classList.add('containerPost_1');
        this.post_1 = new Post_1(containerPost_1);
        this.post_1.render(containerPost_1);

        this.containerContentPost.append(containerPost_1);
    }
}