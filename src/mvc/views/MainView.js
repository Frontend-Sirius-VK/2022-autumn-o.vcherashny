import {TitlePikabu} from '../../components/pikabu/siteTitle/TitlePikabu.js'
import {Content} from '../../components/pikabu/content/Content.js'

export class MainView {
	constructor() {
		this.titlePikabu = null;
        this.content = null;
	}

    render() {
        const root = document.querySelector('#root');
		const container = document.createElement('div');
        container.classList.add('containerPikabu');
        
        const containerTitleMain = document.createElement('div');
        containerTitleMain.classList.add('containerTitleMain');
        this.titlePikabu = new TitlePikabu(containerTitleMain);
        this.titlePikabu.render();

        const containerContentMain = document.createElement('div');
        containerContentMain.classList.add('containerContentMain');
        this.content = new Content(containerContentMain);
        this.content.render();

        container.append(containerTitleMain, containerContentMain);
        root.append(container);
    }
}
