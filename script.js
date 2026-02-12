document.getElementById("openBtn").addEventListener("click", function () {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("loveText").textContent = "💌 Your Surprise Message 💌";
    this.style.display = "none"; // hide the button
});
