class TodoItem {
    constructor(title = "No title", description = "No description", dueDate = null, priority = 0) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    check = 0;

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    setPriority(newPriority) {
        this.priority = newPriority;
    }

    toggleCheck() {
        this.check == 0 ? this.check = 1 : this.check = 0;
    }

    printTodoItem() {
        console.log("Title: " + this.title + "\nDescription: " + this.description + "\nDue date " + this.dueDate + "\nPriority: " + this.priority + "\nCheck: " + this.check)
    }
}

class TodoFolder {
    constructor(title) {
        this.title = title;
    }

    todoList = [];

    addTodoItem(item) {
        this.todoList.push(item);
    }

    removeTodoItem(item) {
        let index = this.todoList.indexOf(item);
        this.todoList.splice(index, 1);
    }

    printTodoFolder() {
        console.log("Folder: " + this.title);
        this.todoList.forEach((item) => {
            console.log("\n");
            item.printTodoItem();
        });
    }
}

let item1 = new TodoItem("dishes", "wash plates", "12.11.1990", 1);
let item2 = new TodoItem("homework", "study math", "20.01.1949", 2);

let folder = new TodoFolder("initial folder")

folder.addTodoItem(item1);
folder.addTodoItem(item2);

folder.removeTodoItem(item1);

folder.printTodoFolder();