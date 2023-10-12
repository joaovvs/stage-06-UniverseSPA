import * as el from "./elements.js";


export function selectedPage() {
    const currentRoute= window.location.pathname

   el.menus.forEach(link => {
        if(link.getAttribute('href')=== currentRoute){
            link.classList.add('currentPage')

        }else{ 
            link.classList.remove('currentPage')
        }
    });

}