import loadTopNavbar from "./topNavbar";
import createOffcanvas from "./offcanvas";

function createContainer(){
    const content = document.createElement('div');
    content.setAttribute("class", "container-fluid m-0 p-0");

    return content;
}
function createRow(){
    const row = document.createElement('div');
    row.setAttribute("class", "row g-0");

    return row;
}
function createColumn(){
    const column = document.createElement('div');
    column.setAttribute("class", "column g-0");

    return column;
}
function loadLayout(){
    const content = createContainer();

    const navbarRow = createRow();
    const navbarColumn = createColumn();
    navbarColumn.classList.add("col");
    navbarRow.appendChild(navbarColumn);
    navbarColumn.appendChild(loadTopNavbar());

    const contentRow = createRow();
    const offcanvasColumn = createColumn();
    offcanvasColumn.classList.add("col-sm-2");
    offcanvasColumn.classList.add("col-12");
    offcanvasColumn.appendChild(createOffcanvas());
    contentRow.appendChild(offcanvasColumn);

    const contentColumn = createColumn();
    contentColumn.classList.add("col-sm-10");
    contentColumn.classList.add("col-12");
    
    contentRow.appendChild(contentColumn);
    content.appendChild(navbarRow);
    content.appendChild(contentRow);

    return content;
}

export default loadLayout;