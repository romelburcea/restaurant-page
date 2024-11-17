import "./styles.css";
import createHomepage from './homepage.js';
import createMenu from './menu.js';
import createContact from "./contact.js";

const home = document.querySelector(".home");
const menu = document.getElementById("menu")
const contact = document.querySelector(".contact")

createHomepage()
function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear the content div
}

home.addEventListener("click", () => {
    console.log('Home button clicked');
    clearContent();   
    createHomepage(); 
});


menu.addEventListener("click", () => {
    clearContent()
    createMenu()
})


contact.addEventListener("click", () => {
    clearContent()
    createContact()
})