// ------------------------------------------- Variables section

// WINDOWS
const modalWindow = document.getElementsByClassName("modal")[0];
const editWindow = document.getElementsByClassName("edit")[0];

// INPUTS
const newHeaderInput = document.getElementById("newHeaderInput");
const newContentInput = document.getElementById("newContentInput");
const editTextArea = document.getElementsByClassName("edit-task-text")[0];

// BUTTONS
const modalCloseBtn = document.getElementById("modalClose");
const modalClearBtn = document.getElementById("modalClear");
const newSaveBtn = document.getElementById("newSave");
const createBtn = document.getElementById("createBtn");
const deleteBtn = document.getElementById("delBtn");
const editBtn = document.getElementById("editBtn");
const editCloseBtn = document.getElementById("editCancelBtn");
const editSaveBtn = document.getElementById("editSaveBtn");

// OTHER
const taskList = document.getElementById("tasks"); // <ul> to store task items
const itemContent = document.getElementById("itcont"); // area on the right to display task content

// Array for storing all tasks
let taskContentArray = [];

// To store the item 
let currentTaskObj;

// ------------------------------------------- Functions section

function TaskObj(head, cont) {
// Task object template
    this.header = head,
    this.content = cont;
}

function taskItemShow(event) {
// Highlights selected item and shows the item content
    let item = event.target;
    let kids = taskList.children;

    for(let i = 0; i < kids.length; i++) {
        kids[i].className = "task-item";
    }

    item.className = "task-item-selected";

    for(let i = 0; i < taskContentArray.length; i++) {
        if(taskContentArray[i].header === item.textContent) {
            itemContent.textContent = taskContentArray[i].content;
            return;
        }
    }
}

// ------------------------------------------- Events section

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

    if(newTaskHeader.length > 55) {
    // Check if task header length is more than 55 letters
        alert("Header must be 55 characters or less!")
        return;
    }

    newTaskItem.textContent = taskObj.header;
    taskContentArray.push(taskObj);
    taskList.appendChild(newTaskItem);
    modalWindow.className = "modal";
});

deleteBtn.addEventListener("click", () => {
// Removes item from the list AND form array to free memory
    if(taskContentArray.length == 0) {
        alert("Nothing to delete");
        return;
    }

    for(let i = 0; i < taskContentArray.length; i++) {
        if(taskContentArray[i].header === taskList.getElementsByClassName("task-item-selected")[0].textContent) {
            taskContentArray.splice(i, 1);
        }
    }

    taskList.removeChild(taskList.getElementsByClassName("task-item-selected")[0]);
    itemContent.textContent = "";
});

// Task items event to hightlight and show content details
taskList.addEventListener("click", taskItemShow);

editBtn.addEventListener("click", () => {
// Inits the EDIT window
    if(taskList.children.length ==0 || itemContent.textContent === "") {
        alert("Nothing to edit");
        return;
    } else {
        editWindow.className = "editRev";
        let selectedItem = document.getElementsByClassName("task-item-selected")[0];

        for(let i = 0; i < taskContentArray.length; i++) {
            if(taskContentArray[i].header === selectedItem.textContent) {
                editTextArea.textContent = taskContentArray[i].content;
                currentTaskObj = taskContentArray[i];
                return;
            }
        }
    }
});

editCloseBtn.addEventListener("click", () => {
// Closes edit window without any savings
    editWindow.className = "edit";
});

editTextArea.addEventListener("keypress", () => {
// Tracks if the item content was changed and activates the SAVE button
    editSaveBtn.className = "edit-btns";
});

editTextArea.addEventListener("change", () => {
// Tracks the changes in the textarea and stores them into temp obj
    currentTaskObj.content = editTextArea.value;
});

editSaveBtn.addEventListener("click", () => {
// Saves the changes 
    for(let i = 0; i < taskContentArray.length; i++) {
        if(taskContentArray[i].header === currentTaskObj.header) {
            taskContentArray[i] = currentTaskObj;
            itemContent.textContent = taskContentArray[i].content;
            break;
        }
    }

    editSaveBtn.className = "edit-btns-inactive";
    editWindow.className = "edit";
});