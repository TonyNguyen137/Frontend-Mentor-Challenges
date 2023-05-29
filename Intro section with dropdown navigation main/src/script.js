let buttons = document.querySelectorAll("button");

let currentDropdown;
function toggler(e) {
    if(window.innerWidth >= 1024) {
        buttons.forEach(e => {
            if(e === this) {
                currentDropdown = e;
                return;
            }
            e.setAttribute("aria-expanded","false");
        })
    } 

    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !expanded)


}
buttons.forEach( e => {
    e.addEventListener("click", toggler);

})






