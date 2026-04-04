document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("updateModal");
    const closeBtn = document.querySelector(".close-btn");
    const gotItBtn = document.getElementById("gotItBtn");

    // Automatically show the modal when the page loads
    // Note: If you only want it to show once per device, we can add localStorage later.
    modal.style.display = "flex";

    // Close the modal when clicking the 'X'
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Close the modal when clicking the button
    gotItBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Close the modal if the user clicks anywhere outside of the modal box
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
