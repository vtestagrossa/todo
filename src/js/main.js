import '../scss/styles.scss';   //  this is needed for style-loader to inject the
                                //  style tag. All styling can now be handled within
                                //  the js modules.

import loadTopNavbar from "./topNavbar.js";
/**
 * 
 * TODO:
 * 
 * Create the navbar with logo
 * Make a control panel that collapses into a hamburger menu
 * Make a default project and todo listing
 * Make a main content area that uses a grid and shows the todo lists
 */

function renderWebpage() {
    const topNavbar = loadTopNavbar();
    document.body.appendChild(topNavbar);
}
renderWebpage();