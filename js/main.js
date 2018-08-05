// Variables section

const modalWindow = document.getElementsByClassName("modal")[0];
const modalCloseBtn = document.getElementById("modalClose");
const modalClearBtn = document.getElementById("modalClear");
const newHeaderInput = document.getElementById("newHeaderInput");
const newContentInput = document.getElementById("newContentInput");
const newSaveBtn = document.getElementById("newSave");
const createBtn = document.getElementById("createBtn");
const taskList = document.getElementById("tasks");
const itemContent = document.getElementById("item-content");

// Events section

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

newSaveBtn.addEventListener("click", () => {
//Saves and adds new task to the list
    let newTaskHeader = newHeaderInput.value;
    let newTaskItem = document.createElement("li");
    newTaskItem.textContent = newTaskHeader;
    newTaskItem.className = "task-item";
    taskList.appendChild(newTaskItem);
    modalWindow.className = "modal";
});