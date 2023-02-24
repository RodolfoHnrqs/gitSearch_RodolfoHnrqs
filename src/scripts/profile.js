function getUserLocalStorage(){
    const userLocalStorage = localStorage.getItem("user")

    return JSON.parse(userLocalStorage)
}

const user = getUserLocalStorage();

export async function getRepositories(user){
        const userRepos = await fetch(`https://api.github.com/users/${user.login}/repos`)
        .then(
            response => response.json()
        )
        .then(
            response => localStorage.setItem("repos", JSON.stringify(response))
        )
        .catch(
            error => console.log(error)
        )

        return userRepos
}

await getRepositories(user);

function getReposLocalStorage(){
    const reposLocalStorage = localStorage.getItem("repos")

    return JSON.parse(reposLocalStorage)
}

const repos = getReposLocalStorage();

async function renderProfile(){
    const navy = document.querySelector(".navygation");
    const reposSection = document.querySelector(".repos");

    const profileImage = document.createElement("img");
    const profileUserName = document.createElement("span");
    const changeUserButton = document.createElement("button");

    profileImage.src = user.avatar_url;
    profileUserName.innerText = user.name;
    changeUserButton.classList.add("homeButton");
    changeUserButton.innerText = "Trocar Usuário";

    navy.append(profileImage, profileUserName, changeUserButton);
    
    repos.forEach(repository => {
        const reposDiv = document.createElement("div");
        const reposTitle = document.createElement("h2");
        const reposDesc = document.createElement("p");
        const reposLink = document.createElement("a");

        reposDiv.classList.add("reposCard");
        reposTitle.innerText = `${repository.name}`;
        reposDesc.innerText = `${repository.description}`;
        reposLink.href = `${repository.html_url}`;
        reposLink.innerText = "Repositório";
        reposLink.target = "_blank";

        reposSection.appendChild(reposDiv);
        reposDiv.append(reposTitle, reposDesc, reposLink)
    });
    
}

function redirectHome(){
    const button = document.querySelector(".homeButton")
    button.addEventListener("click", () => {
        localStorage.removeItem("repos");
        localStorage.removeItem("user")
        window.location.replace("/")
    })
}

getRepositories(user);
renderProfile(user,repos);
redirectHome();