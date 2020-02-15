function component() {
    const element = document.createElement('div');

    element.innerHTML = "Ester OS";

    return element;
}

document.body.appendChild(component());