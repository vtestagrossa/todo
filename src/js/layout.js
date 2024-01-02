import loadTopNavbar from "./topNavbar";
import createNavbarLinks from "./sideNavbar";

function createContainer(){
    const content = document.createElement('div');
    content.setAttribute("class", "container-fluid m-0 p-0");

    return content;
}
function createRow(){
    const row = document.createElement('div');
    row.setAttribute("class", "row");

    return row;
}
function createColumn(){
    const column = document.createElement('div');
    column.setAttribute("class", "column");

    return column;
}
function loadLayout(){
    const content = createContainer();

    const navbarRow = createRow();
    const navbarColumn = createColumn();
    navbarColumn.classList.add("col-12");
    navbarRow.appendChild(navbarColumn);
    navbarColumn.appendChild(loadTopNavbar());

    const contentRow = createRow();
    const toolbarColumn = createColumn();
    toolbarColumn.classList.add("col-sm-2");
    toolbarColumn.classList.add("col-12");
    toolbarColumn.appendChild(createNavbarLinks());
    contentRow.appendChild(toolbarColumn);

    const contentColumn = createColumn();
    contentColumn.classList.add("col-sm-9");
    contentColumn.classList.add("col-12");
    contentRow.appendChild(contentColumn);

    content.appendChild(navbarRow);
    content.appendChild(contentRow);

    return content;
}

export default loadLayout;