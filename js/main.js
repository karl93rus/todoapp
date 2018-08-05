const modalWindow = document.getElementsByClassName("modal")[0];
const modalCloseBtn = document.getElementById("modalClose");
const createBtn = document.getElementById("createBtn");

// Reveal moadal window by CREATE btn click
createBtn.addEventListener("click", () => {
    modalWindow.className = "modalRev";
});

// Close modal window and save data
modalCloseBtn.addEventListener("click", () => {
    modalWindow.className = "modal";
})