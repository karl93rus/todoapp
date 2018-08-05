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

// Functions section

function TaskObj(head, cont) {
// Task object template
    this.header = head,
    this.content = cont;
}

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
    let newTaskContent = newContentInput.value;
    let taskObj = new TaskObj(newTaskHeader, newTaskContent);
    let newTaskItem = document.createElement("li");
    newTaskItem.className = "task-item";
    newTaskItem.textContent = taskObj.header;
    
    taskList.appendChild(newTaskItem);
    modalWindow.className = "modal";
});