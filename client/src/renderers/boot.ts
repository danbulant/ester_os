import RendererDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';

export default class Boot implements RendererDef {
    name = "boot";
    removePrevious = true;
    state = RenderStates.Ready;

    render(){

    }
    eject(){

    }
}