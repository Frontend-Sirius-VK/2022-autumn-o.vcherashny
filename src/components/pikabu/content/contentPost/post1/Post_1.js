import {Post_1Photo} from './Post_1Photo.js';
import {PostButtonBlock_1} from './PostButtonBlock_1.js';
import {ListTags} from './ListTags.js';

export class Post_1 {
    constructor(containerPost_1) {
        this.containerPost_1 = containerPost_1;
        this.postText = null;
        this.Post_1Photo = null;
        this.postButtonBlock_1 = null;
        this.listTags = null;
    }

    render() {
        const containerPost_1Text = document.createElement('div');
        containerPost_1Text.classList.add('containerPost_1Text');
        containerPost_1Text.textContent = 'Примерно так я работаю на РПМ :(';

        const containerPost_1Photo = document.createElement('div');
        containerPost_1Photo.classList.add('containerPost_1Photo');
        this.Post_1Photo = new Post_1Photo();
        this.Post_1Photo.render(containerPost_1Photo);

        const containerListTags = document.createElement('div');
        containerListTags.classList.add('containerPostListTags');
        this.listTags = new ListTags(containerListTags);
        this.listTags.render(containerListTags);

        const containerButtonsBlock_1 = document.createElement('div');
        containerButtonsBlock_1.classList.add('containerPostButtonsBlock_1');
        this.postButtonBlock_1 = new PostButtonBlock_1(containerButtonsBlock_1);
        this.postButtonBlock_1.render(containerButtonsBlock_1);

        this.containerPost_1.append(containerPost_1Text, containerPost_1Photo, containerListTags, containerButtonsBlock_1);
    }
}
