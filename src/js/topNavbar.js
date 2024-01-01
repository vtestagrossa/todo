function loadTopNavbar(){
    const navbar = document.createElement('nav');
    const container = document.createElement('div');
    const brand = document.createElement('a');
    brand.setAttribute("href", "#");
    brand.textContent = "Navbar";
    navbar.setAttribute("class", "navbar navbar-light");
    container.setAttribute("class", "container-fluid bg-secondary navbar-dark px-3");
    brand.setAttribute("class", "navbar-brand");

    navbar.appendChild(container);
    container.appendChild(brand);

    return container;
}
export default loadTopNavbar;