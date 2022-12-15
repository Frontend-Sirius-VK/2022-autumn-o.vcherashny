import {ContentPost} from './contentPost/ContentPost.js'

export class Content {
    constructor(containerContentMain) {
        this.containerContentMain = containerContentMain;
        this.contentPost = null;
        // this.contentAdvertising = null;
    }

    render() {
        const containerContentPost = document.createElement('div');
        containerContentPost.classList.add('containerContentPost');
        this.contentPost = new ContentPost(containerContentPost);
        this.contentPost.render(containerContentPost)

        // const containerContentAdvertising = document.createElement('div');
        // containerContentAdvertising.classList.add('containerContentAdvertising');
        
        this.containerContentMain.append(containerContentPost);
    }
}