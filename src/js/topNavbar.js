function createNavbar(){
    const navbar = document.createElement('nav');
    navbar.setAttribute("class", "navbar fixed-top navbar-dark bg-secondary");

     return navbar;
}
function createToggler(){
    const toggler = document.createElement('button');
    const toggleIcon = document.createElement('span');

    toggler.setAttribute("class", "navbar-toggler");
    toggler.setAttribute("type", "button");
    toggler.setAttribute("data-bs-toggle", "collapse");
    toggler.setAttribute("data-bs-target", "top-nav");
    toggler.setAttribute("aria-controls", "top-nav");
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Toggle Navigation");

    toggleIcon.setAttribute("class", "navbar-toggler-icon");
    toggler.appendChild(toggleIcon);

    return toggler;
}
function createNavbarLinks(){
    const linkContainer = document.createElement('div');
    const uList = document.createElement('ul');

    //TODO: Factor these out into a function so DRY
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const item4 = document.createElement('li');

    uList.appendChild(item1, item2, item3, item4);

    linkContainer.setAttribute("class",
    "collapse navbar-collapse justify-content-end align-center"
    );
    linkContainer.setAttribute("id", "top-nav");

    return linkContainer;
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
    const toggler = createToggler();
    const linkContainer = createNavbarLinks();

    navbar.appendChild(container);

    container.appendChild(brand);
    container.appendChild(toggler);
    container.appendChild(linkContainer);

    brand.appendChild(brandSpan);

    return navbar;
}
export default loadTopNavbar;