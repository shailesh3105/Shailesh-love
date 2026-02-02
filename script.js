const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

// Move NO button away from cursor
document.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const distance = 80; // how close cursor can get

    if (
        cursorX > btnRect.left - distance &&
        cursorX < btnRect.right + distance &&
        cursorY > btnRect.top - distance &&
        cursorY < btnRect.bottom + distance
    ) {
        let newX = btnRect.left + (btnRect.left - cursorX);
        let newY = btnRect.top + (btnRect.top - cursorY);

        // Keep button inside screen
        newX = Math.max(0, Math.min(window.innerWidth - btnRect.width, newX));
        newY = Math.max(0, Math.min(window.innerHeight - btnRect.height, newY));

        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    }
});

// YES click
yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    message.innerHTML = "Yayyy!! 💖 I knew it 😍";
});
