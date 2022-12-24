export class Photo {
    constructor(parent) {
        this.parent = parent;
    }

    render(alt, src) {
        const image = document.createElement('img');
        image.alt = alt;
        image.src = src;
        image.classList.add('PhotoPikabu');

        this.parent.appendChild(image);
    }
}
