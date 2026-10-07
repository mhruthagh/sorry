const forgiveBtn = document.getElementById("forgiveBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

forgiveBtn.addEventListener("click", () => {
    response.innerHTML = `
        YAYYY! 🥹❤️<br>
        I promise I'll try my best to make you smile again! 💕
    `;

    forgiveBtn.innerHTML = "Thank You Ayshu! ❤️";
    forgiveBtn.style.transform = "scale(1.05)";
    createHeartBurst();
});

noBtn.addEventListener("click", () => {
    response.innerHTML = `
        Okay okay... 😭<br>
        I'll wait until you're ready. 🥺❤️
    `;

    noBtn.innerHTML = "Think About It 🥺";
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💓", "💞"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 18) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 900);

function createHeartBurst() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";

            heart.style.left = (30 + Math.random() * 40) + "vw";
            heart.style.bottom = "40%";
            heart.style.fontSize = (18 + Math.random() * 20) + "px";
            heart.style.animationDuration = (2 + Math.random() * 2) + "s";

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }, i * 80);
    }
}
