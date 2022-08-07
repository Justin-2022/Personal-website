window.onscroll = function () {resizeScroll()}
let navBar = document.querySelector("div.top");

function resizeScroll() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        navBar.style.padding = "0px";
        navBar.style.height = "150px";
    }

    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        navBar.style.padding = "10px";
        navBar.style.height = "150px";
    }
}