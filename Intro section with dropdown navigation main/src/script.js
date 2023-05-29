let buttons = document.querySelectorAll("button");
function toggler(e) {
    buttons.forEach(e => {
        if(e === this) return;
        e.setAttribute("aria-expanded","false");
    })
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !expanded)
}
buttons.forEach( e => {
    e.addEventListener("click", toggler);

})




