const navBar = document.querySelector(".nav-bar");
const bottomContainer = document.querySelector(".bottom-container");

console.log(bottomContainer.offsetTop);
console.log(navBar.offsetHeight);

window.addEventListener("scroll", () => {
    if( window.scrollY > bottomContainer.offsetTop - navBar.offsetHeight - 50){
        navBar.classList.add("active");
    } else{
        navBar.classList.remove("active");
    }
});
