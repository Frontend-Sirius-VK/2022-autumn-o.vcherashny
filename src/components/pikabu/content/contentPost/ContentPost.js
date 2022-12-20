import {Post_1} from './post1/Post_1.js';
import {Post_2} from './post2/Post_2.js';

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

        const containerPost_2 = document.createElement('div');
        containerPost_2.classList.add('containerPost_2');
        this.post_2 = new Post_2(containerPost_2);
        this.post_2.render(containerPost_2);

        this.containerContentPost.append(containerPost_1, containerPost_2);
    }
}