
document.getElementById("color-btn")
.addEventListener("click", function() {
    const colors = ["red", "green", "blue", "yellow", "pink", "purple"];
    const changeColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = changeColor;
})