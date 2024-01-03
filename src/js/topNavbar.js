function createNavbar(){
    const navbar = document.createElement('nav');
    navbar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-secondary");

     return navbar;
}
function createToggler(){
    const toggler = document.createElement('button');
    const toggleIcon = document.createElement('span');

    toggler.setAttribute("class", "navbar-toggler d-lg-none");
    toggler.setAttribute("type", "button");
    toggler.setAttribute("data-bs-toggle", "offcanvas");
    toggler.setAttribute("data-bs-target", "#top-nav");
    toggler.setAttribute("aria-controls", "top-nav");
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Toggle Navigation");

    toggleIcon.setAttribute("class", "navbar-toggler-icon");
    toggler.appendChild(toggleIcon);

    return toggler;
}
function createContainer(){
    const container = document.createElement('div');
    container.setAttribute("class", "d-flex justify-content-between flex-row-reverse container-fluid px-3 py-3 container-fluid");

    return container;
}

function createBrandSpan(brandText){
    const brandSpan = document.createElement('span');
    brandSpan.setAttribute("class", "fw-bold primary");

    brandSpan.textContent = brandText;

    return brandSpan;
}

function createBrand(anchor){
    const brand = document.createElement('a');
    brand.setAttribute("href", "#" + anchor);
    brand.setAttribute("class", "navbar-brand");

    return brand;
}
function loadTopNavbar(){
    const navbar = createNavbar();
    const container = createContainer();
    const brandSpan = createBrandSpan("TODO List: PRO");
    const brand = createBrand("");
    const toggler = createToggler();

    navbar.appendChild(container);

    container.appendChild(brand);
    container.appendChild(toggler);

    brand.appendChild(brandSpan);

    return navbar;
}
export default loadTopNavbar;