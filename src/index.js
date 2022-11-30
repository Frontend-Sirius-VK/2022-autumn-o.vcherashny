import { HelloWorld } from "./components/HelloWorld.js";

const root = document.querySelector('#root');
const helloWorld = new HelloWorld(root);
helloWorld.render();
