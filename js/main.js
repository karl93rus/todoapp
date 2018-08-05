const modalWindow = document.getElementsByClassName("modal")[0];
const modalCloseBtn = document.getElementById("modalClose");
const createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", () => {
// Reveal moadal window by CREATE btn click
    modalWindow.className = "modalRev";
});

modalCloseBtn.addEventListener("click", () => {
// Close modal window and save data
    modalWindow.className = "modal";
})