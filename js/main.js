const modalWindow = document.getElementsByClassName("modal")[0];
const modalCloseBtn = document.getElementById("modalClose");
const modalClearBtn = document.getElementById("modalClear");
const newHeaderInput = document.getElementById("newHeaderInput");
const newContentInput = document.getElementById("newContentInput");
const createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", () => {
// Reveal moadal window by CREATE btn click
    modalWindow.className = "modalRev";
    newHeaderInput.value = "";
    newContentInput.value = "";
});

modalCloseBtn.addEventListener("click", () => {
// Close modal window and save data
    modalWindow.className = "modal";
});

modalClearBtn.addEventListener("click", () => {
// Clears all input fields
    newHeaderInput.value = "";
    newContentInput.value = "";
});