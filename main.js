const nav = document.querySelector("#nav");
const btn_nav_abrir = document.querySelector("#btn-menu-open");
const btn_nav_cerrar = document.querySelector("#btn-menu-close");
const login = document.querySelector("#login");
const btn_login_abrir = document.querySelector("#user-btn-open");
const btn_login_cerrar = document.querySelector("#user-btn-close");

btn_nav_abrir.addEventListener("click", () => {
    nav.classList.add("visible")
})

nav.addEventListener("mouseleave", () => {
    nav.classList.remove("visible")
})

btn_login_abrir.addEventListener("click", () => {
    login.classList.add("visible")
})

login.addEventListener("mouseleave", () => {
    login.classList.remove("visible")
})

