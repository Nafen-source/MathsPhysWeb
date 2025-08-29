var coll = document.getElementsByClassName("collapsible");
var i;

for (i=0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";
        }
    });
}

document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
})