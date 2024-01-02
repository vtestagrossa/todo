//TODO: Need to refactor this into multiple functions and export the module
function createNavbarLinks(){
    const linkContainer = document.createElement('div');
    const uList = document.createElement('ul');

    linkContainer.setAttribute("class",
    "collapse navbar-collapse"
    );
    linkContainer.setAttribute("id", "top-nav");

    uList.setAttribute("class", "navbar-nav me-auto mb-2 mb-lg-0");

    //TODO: Factor these out into a function so DRY
    const item1 = document.createElement('li');
    const link1 = document.createElement('a');
    const item2 = document.createElement('li');
    const link2 = document.createElement('a');
    const item3 = document.createElement('li');
    const link3 = document.createElement('a');
    const item4 = document.createElement('li');
    const link4 = document.createElement('a');


    item1.setAttribute("class", "nav-item");
    item2.setAttribute("class", "nav-item");
    item3.setAttribute("class", "nav-item");
    item4.setAttribute("class", "nav-item");

    link1.setAttribute("class", "nav-link");
    link2.setAttribute("class", "nav-link");
    link3.setAttribute("class", "nav-link active");
    link4.setAttribute("class", "nav-link");

    link1.setAttribute("href", "#");
    link2.setAttribute("href", "#");
    link3.setAttribute("href", "#");
    link4.setAttribute("href", "#");

    link1.textContent = "Add List"
    link2.textContent = "Add Group"
    link3.textContent = "Home"
    link4.textContent = "Other"

    item1.appendChild(link1);
    item2.appendChild(link2);
    item3.appendChild(link3);
    item4.appendChild(link4);

    uList.appendChild(item1);
    uList.appendChild(item2);
    uList.appendChild(item3);
    uList.appendChild(item4);

    linkContainer.appendChild(uList);

    return linkContainer;
}