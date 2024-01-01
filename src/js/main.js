import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

function test() {
    const container = document.createElement('div');
    container.classList.add("container", "py-2", "px-5", "secondary");
    container.textContent = "Testing the container";

    return container;
}

document.body.appendChild(test());