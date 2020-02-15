import RendererDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';
import Welcome from './welcome';

import './styles/boot.css';

/*
A word why this is the only renderer that doesn't have prepare() function that prepares 
rendering elements between actually rendering them.
It's quite simple: this is the first renderer to start, so we want to user to see
something as fast as possible, so they don't stare at white screen.
*/
export default class Boot implements RendererDef {
    name = "boot";
    removePrevious = true;
    state = RenderStates.Ready;

    render(){
        console.log("Boot renderer active");
        this.state = RenderStates.Rendered;

        const body = document.body;

        var boot = document.createElement("div");
        body.appendChild(boot);
        boot.className = "boot-rendered";
        boot.id = "boot";

        var text = document.createElement("div");
        text.innerText = "Booting Ester OS!";
        text.className = "boot-text";

        boot.appendChild(text);

        var w = new Welcome();
        w.prepare().then(()=>{w.render()});
    }
    eject(){
        console.log("Boot renderer ejected");
        this.state = RenderStates.Ejected;

        document.body.removeChild(document.getElementById("boot"));
    }
}