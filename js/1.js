import c from "./config.js";

window.onload = function () {
    document.querySelector(".load").style.display = "none";
    document.querySelector(".Box").classList.add("BoxLoad");
};

new Vue({
    el: "#app",
    data: {
        tabState: false, 
        menuTabState: false, 
        pagesTabState: false, 
        pageIndex: 0,
    },
    methods: {
        closeBlackWindow() {
            this.tabState = this.menuTabState = this.pagesTabState = false;
        },
    }
});
