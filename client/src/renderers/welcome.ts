import RenderDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';
import Login from './login';
import './styles/welcome.css';

class Welcome implements RenderDef {
    name = "welcome";
    state = RenderStates.Init;

    element: HTMLElement = null;

    render() {
        console.log("[WELCOME] Active");
        if(!this.element)throw Error("Trying to render before renderer is renderable");
        document.body.appendChild(this.element);

        var once = () => {
            document.removeEventListener('keypress', once);
            document.removeEventListener('mousedown', once);

            var l = new Login();
            l.prepare().then(()=>{
                l.render();
                this.eject();
            })
        }
        document.addEventListener('keypress', once, false);
        document.addEventListener('mousedown', once, false);

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

        var id:NodeJS.Timeout = setInterval(()=>{
            if(w.state != RenderStates.Rendered){
                console.log("[WELCOME] Timeout cancelled, not in state Rendered");
                return clearInterval(id);
            }
            var d: Date = new Date();
            t.innerText = d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");
        }, 1000)

        el.appendChild(t);

        this.state = RenderStates.Ready;
        console.log("[WELCOME] Ready");
    }
    eject() {
        console.log("[WELCOME] Ejected");
        document.body.removeChild(this.element);
        this.state = RenderStates.Ejected;
    }
}

export default Welcome;