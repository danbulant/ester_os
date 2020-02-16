import RenderDef from '../defs/renderer';
import RenderStates from '../defs/renderStates';
import Welcome from './welcome';
import './styles/login.css';
import LoginManager from '../managers/login';

class Login implements RenderDef {
    name = "login";
    state = RenderStates.Init;

    element:HTMLElement = null;
    counter:number = 0;
    listener:NodeJS.Timeout = null;
    keyListener() {
        this.counter = 0;
    }

    render(){
        if(!this.element)throw new Error("Cannot render without preparing login");

        console.log("[LOGIN] Active");

        this.listener = setInterval(() => {
            this.counter++;
            if(this.counter > 14) this.showWelcome();
        }, 1000);

        var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach((name)=>{
            document.addEventListener(name, this.keyListener, true);
        });

        document.body.appendChild(this.element);
    }

    showWelcome(){
        if(this.state != RenderStates.Rendered)return;

        var w = new Welcome();
        var p = w.prepare();
        this.element.classList.add("inactive");
        setTimeout(()=>{
            if(w.state == RenderStates.Ready){
                w.render();
            } else {
                p.then(()=>{w.render()});
            }
            this.eject();
        }, 1000)
    }

    async prepare(){
        this.element = document.createElement("div");
        var el = this.element;

        el.className = "login";

        var loginForm = document.createElement("div");
        loginForm.className = "login-form";
        el.appendChild(loginForm);

        var avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
        loginForm.appendChild(avatar);

        var username = document.createElement("input");
        username.type = "text";
        username.className = "username";
        username.placeholder = "Username";
        loginForm.appendChild(username);

        var password = document.createElement("input");
        password.type = "password";
        password.className = "password";
        password.placeholder = "Password";
        loginForm.appendChild(password);

        var submit = document.createElement("button");
        submit.innerText = "login";
        submit.className = "submit";
        submit.onclick = ()=>{this.login()};
        loginForm.appendChild(submit);

        var error = document.createElement("div");
        error.innerText = "This user doesn't exist";
        error.className = "error";
        error.style.display = "none";
        loginForm.appendChild(error);

        console.log("[LOGIN] Ready");
    }

    login(){
        console.log("[LOGIN] Submitting");
        var u = this.element.getElementsByClassName("username")[0] as HTMLInputElement;
        var p = this.element.getElementsByClassName("password")[0] as HTMLInputElement;

        var l = new LoginManager();

        console.log("Trying to login with user " + u.value + " and password " + p.value);
        l.login(u.value, p.value).then(console.log);
    }

    eject(){
        if(this.state == RenderStates.Ejected)throw Error("Already ejected login");

        console.log("[LOGIN] Ejected");
        this.state = RenderStates.Ejected;

        document.body.removeChild(this.element);
        clearInterval(this.listener);
        this.counter = 0;

        var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach((name)=>{
            document.removeEventListener(name, this.keyListener, true);
        });
    }
}

export default Login;