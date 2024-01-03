/**
 * TODO: make this stay open if the page is large or bigger.
 */
function createHeader(title){
    const header = document.createElement('div');
    const headerTitle = document.createElement('h5');
    const closeButton = document.createElement('button');

    header.setAttribute("class", "offcanvas-header");
    headerTitle.setAttribute("class", "offcanvas-title fw-bold");
    headerTitle.textContent = title;
    closeButton.setAttribute("class", "btn-close btn-close-white");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-bs-target", "#top-nav");
    closeButton.setAttribute("data-bs-dismiss", "offcanvas");
    closeButton.setAttribute("aria-label", "close");

    header.appendChild(headerTitle);
    header.appendChild(closeButton);

    return header;
}
function createLink(href, description){
    const ocItem = document.createElement('li');
    const ocLink = document.createElement('a');

    ocItem.setAttribute("class", "nav-item");
    ocLink.setAttribute("class", "btn btn-outline-light w-100 mx-1 my-1");
    ocLink.setAttribute("href", href);
    ocLink.textContent = description;

    ocItem.appendChild(ocLink);

    return ocItem;
}
function createOffcanvas(){
    const title = "Project View";
    const linkContainer = document.createElement('div');
    const breakpointTitle = document.createElement('h4');
    const body = document.createElement('div');
    const header = createHeader(title);
    const uList = document.createElement('ul');

    body.setAttribute("class", "offcanvas-body vh-100 vw-10");

    linkContainer.setAttribute("class", 
        "offcanvas-lg offcanvas-start bg-secondary text-light"
    );
    linkContainer.setAttribute("id", "top-nav");
    linkContainer.setAttribute("tabindex", "-1");

    uList.setAttribute("class", "navbar-nav justify-content-start flex-grow-1 pe-3 mx-3");

    breakpointTitle.setAttribute("class", 
        "offcanvas-title fw-bold d-none d-lg-block my-2 border-bottom border-2 py-2"
    );
    breakpointTitle.textContent = title;

    const firstItem = createLink("#", "Home");
    const secondItem = createLink("#", "New Project");
    const thirdItem = createLink("#", "New List");

    uList.appendChild(breakpointTitle);
    uList.appendChild(firstItem);
    uList.appendChild(secondItem);
    uList.appendChild(thirdItem);

    body.appendChild(uList);
    linkContainer.appendChild(header);
    linkContainer.appendChild(body);

    return linkContainer;
}

export default createOffcanvas;