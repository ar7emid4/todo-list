import { TodoItem, TodoList } from "./app-logic.js";

let item1 = new TodoItem("Wash the dishes", undefined, "12.11.1990", 2);
let item2 = new TodoItem("Vacuum the carpet", "get the vacuum cleaner out of the closet, plug it in, vacuum the carpet", undefined, 1);
let item3 = new TodoItem("Wash the windows", undefined, "01.01.2777", 3);

let lists = [new TodoList("Chores"), new TodoList("Work"), new TodoList("Books"), new TodoList("asd kdsaokld k as;lkd askl;dkl ksad jj asj"), new TodoList("pdaspdksapofmdlkgifdsgpoa[doasod[pkaasj")]
let activeList = lists[0];
lists[0].addTodoItem(item1);
lists[0].addTodoItem(item2);
lists[0].addTodoItem(item3);



let listsContainer = document.querySelector(".lists");
listsContainer.textContent = ""; //dsakfgjsdfgjiofdsjgpdsfjgjfdsgjpdofsj;dlsfdskflikjdsfjksdflkjdsflk

for (let i = 0; i < lists.length; i++) {
    displayList(lists[i]);
}

let listName = document.querySelector(".list-name");

function displayList(listObject) {
    let newListEntry = document.createElement("p");
    newListEntry.classList.add("list");
    newListEntry.textContent = listObject.getListName();
    newListEntry.addEventListener("click", (event) => {
        document.querySelectorAll(".list").forEach( (list) => delete list.dataset.status);
        event.target.dataset.status = "active"
        displayListContent(listObject);
        activeList = listObject;
    });
    listsContainer.appendChild(newListEntry);
}

function displayListContent(listObject) {
    let listName = document.querySelector(".list-name");
    listName.textContent = listObject.getListName();

    let tasks = document.querySelector(".tasks");
    tasks.textContent = "";

    for (let i = 0; i < listObject.getListLength(); i++ ) {
        let itemObject = listObject.getTodoItem(i);
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        taskContainer.addEventListener("click", displayDescripton);
        tasks.appendChild(taskContainer);

        function displayDescripton() {
            let taskDescription = document.createElement("p");
            taskDescription.classList.add("task-description");
            taskDescription.textContent = itemObject.getDescription();
            taskContainer.appendChild(taskDescription);
            taskContainer.removeEventListener('click', displayDescripton);
            taskContainer.addEventListener("click", hideDescription);
        }

        function hideDescription() {
            taskContainer.lastElementChild.remove();
            taskContainer.removeEventListener('click', hideDescription);
            taskContainer.addEventListener("click", displayDescripton);
        }

        let taskMenu = document.createElement("div");
        taskMenu.classList.add("task-menu");
        taskContainer.appendChild(taskMenu);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = itemObject.getCheck();
        checkbox.addEventListener("change", (event) => {
            itemObject.toggleCheck()
        });
        taskMenu.appendChild(checkbox);

        let taskName = document.createElement("p");
        taskName.classList.add("task-name");
        taskName.dataset.priority = itemObject.getPriority();
        taskName.textContent = itemObject.getName();
        taskMenu.appendChild(taskName);

        let taskDueDate = document.createElement("time");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.textContent = itemObject.getDueDate();
        taskMenu.appendChild(taskDueDate);

        let taskDeleteButton = document.createElement("button");
        taskDeleteButton.classList.add("task-delete-button");
        taskDeleteButton.textContent = "Delete";
        taskDeleteButton.addEventListener("click", (event) => {
            listObject.removeTodoItem(itemObject);
            displayListContent(listObject);
        });
        taskMenu.appendChild(taskDeleteButton);
    }
}

let newListButton = document.querySelector(".new-list-button");
let newListDialog = document.querySelector(".new-list-dialog");
newListButton.addEventListener("click", () => newListDialog.show());
let newListForm = document.querySelector(".new-list-form");
newListForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(newListForm);
    let formEntries = (Object.fromEntries(formData));
    newListDialog.close();
    newListForm.reset();

    lists.push(new TodoList(formEntries.newListName));
    listsContainer.textContent = "";
    for (let i = 0; i < lists.length; i++) {
        displayList(lists[i]);
    };
});

let newTaskButton = document.querySelector(".new-task-button");
let newTaskDialog = document.querySelector(".new-task-dialog");
newTaskButton.addEventListener("click", () => newTaskDialog.show());
let newTaskForm = document.querySelector(".new-task-form");
newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(newTaskForm);
    let formEntries = (Object.fromEntries(formData));
    newTaskDialog.close();
    newTaskForm.reset();

    activeList.addTodoItem(new TodoItem(formEntries.newTaskName, formEntries.newTaskDescription, formEntries.newTaskDate, formEntries.newTaskPriority));
    displayListContent(activeList);
});





