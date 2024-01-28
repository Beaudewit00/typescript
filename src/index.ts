document.querySelector(".update-profile-btn")?.addEventListener("click", () => {
    alert("Profile updated!");
});

function setup(): void {
    document.querySelector(".username").innerHTML = "Frank Visser";
}

setup();