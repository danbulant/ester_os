import Boot from '../renderers/boot';

export default class Renderer {
    constructor(){
        var boot = new Boot();
        boot.render();
    }
}