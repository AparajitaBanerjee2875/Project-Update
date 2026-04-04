document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("updateModal");
    const closeBtn = document.querySelector(".close-btn");
    const gotItBtn = document.getElementById("gotItBtn");

    modal.style.display = "flex";
    
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };


    gotItBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
