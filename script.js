const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

// Move NO button when mouse comes near
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// YES button click
yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    message.innerHTML = "Yayyy!! 💖 I knew it 😍<br>Happy Valentine’s Day 💕";
});
