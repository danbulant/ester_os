import RenderDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';
import Welcome from './welcome';
import './styles/login.css';

class Login implements RenderDef {
    name = "login";
    state = RenderStates.Init;
    removePrevious = true;

    element:HTMLElement = null;
    listener:NodeJS.Timeout = null;
    
    keyListener() {
        clearTimeout(this.listener);
        this.listener = setTimeout(() => { this.showWelcome() }, 15000);
    }

    render(){
        if(!this.element)throw new Error("Cannot render without preparing login");

        console.log("Login renderer active");

        this.listener = setTimeout(() => { this.showWelcome() }, 15000);
        document.addEventListener('keypress', this.keyListener, false);

        document.body.appendChild(this.element);
    }

    showWelcome(){
        var w = new Welcome();
        w.prepare().then(()=>{
            this.eject();
            w.render();
        });
    }

    async prepare(){
        this.element = document.createElement("div");
        var el = this.element;

        el.innerText = "Pls login";
        el.className = "login";

        console.log("Login renderer prepared");
    }
    eject(){
        console.log("Login renderer ejected");
        this.state = RenderStates.Ejected;

        document.body.removeChild(this.element);
        document.removeEventListener('keypress', this.keyListener);
    }
}

export default Login;