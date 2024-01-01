function loadTopNavbar(){
    const content = document.createElement('div');
    const navbar = document.createElement('nav');
    const container = document.createElement('div');
    const brand = document.createElement('a');
    brand.setAttribute("href", "#");
    brand.textContent = "Navbar";
    content.setAttribute("class", "container-fluid m-0 p-0");
    navbar.setAttribute("class", "navbar navbar-dark bg-dark");
    container.setAttribute("class", "container-fluid navbar-dark px-5 border-3");
    brand.setAttribute("class", "navbar-brand");

    content.appendChild(navbar);
    navbar.appendChild(container);
    container.appendChild(brand);

    return content;
}
export default loadTopNavbar;