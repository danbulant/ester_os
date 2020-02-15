import boot from './managers/boot';

//Handle errors
window.onerror = (msg, url, line, col, error)=>{
    var e = document.createElement("div");
    document.body.appendChild(e);
    
    e.style.background = "rgb(31, 31, 31)";
    e.style.color = "white";
    e.style.position = "fixed";
    e.style.top = '0';
    e.style.left = '0';
    e.style.zIndex = '999';
    e.style.width = '100%';
    e.style.height = '100%';
    e.style.fontFamily = 'robotomedium';
    e.style.paddingLeft = '70px';
    e.style.paddingTop = '20px';

    var m = document.createElement("div");
    e.appendChild(m);
    m.innerHTML = 'An error occured in <a href="' + url + '">' + url + '</a>:';
    let a = m.children[0] as HTMLElement;
    a.style.color = 'cyan';

    let pre = document.createElement("pre");
    e.appendChild(pre);
    let code = document.createElement("code");
    pre.appendChild(code);
    
    code.innerText = error.stack;
    code.style.color = "red";
    pre.style.backgroundColor = "rgb(41, 41, 41)";
    pre.style.height = "80%";
    pre.style.width = "60%";
    code.style.fontFamily = "consolas";
}

boot();
