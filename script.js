document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("updateModal");
    const closeBtn = document.querySelector(".close-btn");
    const gotItBtn = document.getElementById("gotItBtn");

    modal.style.display = "flex";

    // Guard: only attach if a close button actually exists in the markup
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }

    gotItBtn.onclick = () => {
        // Grab the doc link straight from the modal's own <a> tag,
        // so it always matches whatever update is shown in the popup.
        const docLink = modal.querySelector("a");
        if (docLink && docLink.href) {
            window.open(docLink.href, "_blank");
        }
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
