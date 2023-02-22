import { getUser } from "./index.js";

async function renderProfile(){
    const body = document.querySelector("body");
    const user = await getUser();
    console.log(user)
    const navImage = document.createElement("img");

}

function redirectHome(){
    const button = document.querySelector(".homeButton")
    button.addEventListener("click", () => {
        window.location.replace("/")
    })
}

redirectHome();
renderProfile();