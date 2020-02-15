import RendererDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';

export default class Boot implements RendererDef {
    name = "boot";
    removePrevious = true;
    state = RenderStates.Ready;

    render(){
        console.log("Boot renderer active");
        this.state = RenderStates.Rendered;

    }
    eject(){
        console.log("Boot renderer ejected");
        this.state = RenderStates.Ejected;
    }
}