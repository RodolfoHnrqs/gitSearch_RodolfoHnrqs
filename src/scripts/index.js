export async function getUser(){
    const input = document.querySelector(".inputUser");
    const button = document.querySelector("#getUser");

    button.addEventListener("click", async (event) => {
        event.preventDefault();
        const userApi = await fetch(`https://api.github.com/users/${input.value}`)
        .then(
            response => response.json()
        )
        .catch(
            error => window.location.replace("./src/pages/error.html")
        )
        
        window.location.replace("./src/pages/profile.html")
        return userApi
    })
}

getUser();