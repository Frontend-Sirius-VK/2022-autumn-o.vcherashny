export class HelloWorld {
    
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const element = document.createElement('h1');
        element.textContent = 'Hello world 1';
        this.parent.appendChild(element);
    }
}
