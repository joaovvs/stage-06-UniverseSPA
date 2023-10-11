import * as el from "./elements.js"
import * as actions from "./actions.js" 


export function registerControls() {

    el.selectedItem.addEventListener('click', (event) => {
       
        console.log(event.target);
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function") {
            return;
        }
        actions[action]();

        console.log (actions);
    })

}