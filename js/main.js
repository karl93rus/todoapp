// ------------------------------------------- Variables section

const modalWindow = document.getElementsByClassName("modal")[0];
const modalCloseBtn = document.getElementById("modalClose");
const modalClearBtn = document.getElementById("modalClear");
const newHeaderInput = document.getElementById("newHeaderInput");
const newContentInput = document.getElementById("newContentInput");
const newSaveBtn = document.getElementById("newSave");
const createBtn = document.getElementById("createBtn");
const deleteBtn = document.getElementById("delBtn");
const taskList = document.getElementById("tasks");
const itemContent = document.getElementById("itcont");

// Array for storing all tasks
let taskContentArray = [];

// ------------------------------------------- Functions section

function TaskObj(head, cont) {
// Task object template
    this.header = head,
    this.content = cont;
}

function taskItemShow(event) {
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
    newTaskItem.textContent = taskObj.header;
    taskContentArray.push(taskObj);
    
    taskList.appendChild(newTaskItem);
    modalWindow.className = "modal";
});

deleteBtn.addEventListener("click", () => {
// Removes item from the list AND form array to free memory
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