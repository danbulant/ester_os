import RenderDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';
import './styles/welcome.css';

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
        
        var t:HTMLDivElement = document.createElement("div");
        t.className = "welcome-time";
        var d:Date = new Date();
        t.innerText = d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");

        var w:RenderDef = this;
        setTimeout(() => {
            var d:Date = new Date();
            t.innerText = d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");

            var id:NodeJS.Timeout = setInterval(()=>{
                if(w.state != RenderStates.Rendered)return clearInterval(id);

                var d = new Date();
                t.innerText = d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");
            }, 60000)
        }, 60000 - d.getMilliseconds());//exactly every minute

        el.appendChild(t);

        this.state = RenderStates.Ready;
    }
    eject(){
        document.body.removeChild(this.element);
        this.state = RenderStates.Ejected;
    }
}

export default Welcome;