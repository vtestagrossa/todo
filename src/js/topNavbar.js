function createNavbar(){
    const navbar = document.createElement('nav');
    navbar.setAttribute("class", "navbar fixed-top navbar-dark bg-secondary");
     return navbar;
}

function createContainer(){
    const container = document.createElement('div');
    container.setAttribute("class", "d-flex justify-content-between flex-row-reverse container-fluid px-3 py-3 container-xxl");

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
    brand.setAttribute("href", "#");
    brand.setAttribute("class", "navbar-brand");

    return brand;
}
function loadTopNavbar(){
    const navbar = createNavbar();
    const container = createContainer();
    const brandSpan = createBrandSpan("TODO List: PRO");
    const brand = createBrand("#");

    navbar.appendChild(container);
    container.appendChild(brand);
    brand.appendChild(brandSpan);

    return navbar;
}
export default loadTopNavbar;