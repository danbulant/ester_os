import RenderDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';
import Background from './images/backgrounds/nightTime.jpg';

class Welcome implements RenderDef {
    name = "welcome";
    state = RenderStates.Init;
    removePrevious = false;

    element: HTMLElement = null;

    render(){
        if(!this.element)throw Error("Trying to render before renderer is renderable");
        document.body.appendChild(this.element);
        this.state = RenderStates.Rendered;
    }
    async prepare(){
        this.element = document.createElement("div");
        var el = this.element;//LAZYNESS
        el.className = "welcome-page";

        el.style.background = Background;
        this.state = RenderStates.Ready;
    }
    eject(){
        document.body.removeChild(this.element);
        this.state = RenderStates.Hidden; //this eject function doesn't destroy anything, so it might be reused
    }
}

export default Welcome;