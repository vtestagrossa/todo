import '../scss/styles.scss';   //  this is needed for style-loader to inject the
                                //  style tag. All styling can now be handled within
                                //  the js modules.
import 'bootstrap';             //  needed for bootstrap's js.
import loadLayout from './layout';
/**
 * 
 * TODO:
 * 
 * Make a control panel that collapses into a hamburger menu
 * Make a default project and todo listing
 * Make a main content area that uses a grid and shows the todo lists
 */

function renderWebpage() {
    const layout = loadLayout();
    document.body.appendChild(layout);
}
renderWebpage();