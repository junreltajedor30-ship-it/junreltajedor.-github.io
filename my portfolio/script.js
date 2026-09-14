/* =========================
   DARK MODE
========================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

});



/* =========================
   HOBBY INTERACTION
========================= */

function showHobby(hobby) {

    const message = document.getElementById("hobbyMessage");

    let text = "";

    if (hobby === "Painting") {

        text = "🎨 Painting gives me a way to turn my thoughts and imagination into something I can see.";

    }

    else if (hobby === "Cooking") {

        text = "🍳 Cooking is fun for me because I enjoy creating something and sharing it with other people.";

    }

    else if (hobby === "Music") {

        text = "🎧 Music is one of the easiest ways for me to relax, focus, or simply enjoy my day.";

    }

    else if (hobby === "Anime") {

        text = "🌙 Anime gives me interesting stories, characters, and worlds that I can escape into for a while.";

    }

    message.innerHTML = "<p>" + text + "</p>";

}



/* =========================
   PHOTO VIEWER
========================= */

function openPhoto(photo) {

    const modal = document.getElementById("photoModal");

    const bigPhoto = document.getElementById("bigPhoto");

    bigPhoto.src = photo.src;

    modal.style.display = "flex";

}



function closePhoto() {

    const modal = document.getElementById("photoModal");

    modal.style.display = "none";

}



/* =========================
   CLOSE PHOTO BY CLICKING
   OUTSIDE THE IMAGE
========================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("photoModal");

    if (event.target === modal) {

        closePhoto();

    }

});



/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

    }

});
