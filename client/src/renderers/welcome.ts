import RenderDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';
import Login from './login';
import './styles/welcome.css';

class Welcome implements RenderDef {
    name = "welcome";
    state = RenderStates.Init;
    removePrevious = false;

    element: HTMLElement = null;

    render() {
        console.log("Welcome renderer active");
        if(!this.element)throw Error("Trying to render before renderer is renderable");
        document.body.appendChild(this.element);

        var once = () => {
            console.log("Opening login")
            document.removeEventListener('keypress', once);

            var l = new Login();
            l.prepare().then(()=>{
                l.render();
                this.eject();
            })
        }
        document.addEventListener('keypress', once, false);

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
                console.log("Canceling timeout as welcome is no longer in state Rendered");
                return clearInterval(id);
            }
            var d: Date = new Date();
            t.innerText = d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");
        }, 1000)

        el.appendChild(t);

        this.state = RenderStates.Ready;
        console.log("Welcome renderer prepared");
    }
    eject() {
        console.log("Welcome renderer ejected");
        document.body.removeChild(this.element);
        this.state = RenderStates.Ejected;
    }
}

export default Welcome;