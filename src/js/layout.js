import loadTopNavbar from "./topNavbar";
import createNavbarLinks from "./sideNavbar";

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
    const toolbarColumn = createColumn();
    toolbarColumn.classList.add("col-sm-2");
    toolbarColumn.classList.add("col-12");
    toolbarColumn.appendChild(createNavbarLinks());
    contentRow.appendChild(toolbarColumn);

    const contentColumn = createColumn();
    contentColumn.classList.add("col-sm-10");
    contentColumn.classList.add("col-12");
    /* 
    contentColumn.classList.add("bg-primary");
    contentColumn.classList.add("content-fluid");
    contentColumn.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error consequatur labore rerum recusandae voluptatem doloribus itaque asperiores in dicta. Eius vel distinctio in fuga similique aut quisquam tempore corporis consequatur, provident ratione laboriosam suscipit animi assumenda beatae dolorum corrupti laudantium earum tempora? Voluptate consequuntur iure animi eveniet nemo accusamus." 
    */
    contentRow.appendChild(contentColumn);

    content.appendChild(navbarRow);
    content.appendChild(contentRow);

    return content;
}

export default loadLayout;