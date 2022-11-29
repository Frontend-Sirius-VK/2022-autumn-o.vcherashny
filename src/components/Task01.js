export class Task01 {
    
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const element = document.createElement('h1');
        element.textContent = 'Hello world';
        this.parent.appendChild(element);
    }
}
