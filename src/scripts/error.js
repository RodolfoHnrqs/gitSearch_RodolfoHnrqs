function returnHome(){
    const button = document.querySelector(".returnHome");
    button.addEventListener("click", () => {
        window.location.replace("/")
    })
}

returnHome();