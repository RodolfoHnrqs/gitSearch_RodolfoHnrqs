export async function getUser(){
    const input = document.querySelector(".inputUser");
    const button = document.querySelector("#getUser");

    button.addEventListener("click", async (event) => {
        event.preventDefault();
        const userApi = await fetch(`https://api.github.com/users/${input.value}`)
        .then(
            response => response.json()
        )
        .then(
            response => {
                localStorage.setItem("user", JSON.stringify(response))
            }

        )
        .catch(
            error => window.location.replace("./src/pages/error.html")
        )

        .finally(
            response => {
                const user = JSON.parse(localStorage.getItem("user"))
                if(user){
                    window.location.replace("./src/pages/profile.html")
                }else{
                    window.location.replace("./src/pages/error.html") 
                }
            }
        )

        return userApi
    })
}

getUser();