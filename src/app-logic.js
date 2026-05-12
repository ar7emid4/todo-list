export class TodoItem {
    constructor(name = "No name", description = "No description", dueDate = null, priority = 0) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    check = 0;

    setName(newName) {
        this.name = newName;
    }

    getName() { return this.name };

    setDescription(newDescription) {
        this.description = newDescription;
    }

    getDescription() { return this.description }

    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    getDueDate() { return this.dueDate };

    setPriority(newPriority) {
        this.priority = newPriority;
    }

    getPriority() { return this.priority };

    toggleCheck() {
        this.check == 0 ? this.check = 1 : this.check = 0;
    }

    getCheck() { return this.check };

    printTodoItem() {
        console.log("Name: " + this.name + "\nDescription: " + this.description + "\nDue date " + this.dueDate + "\nPriority: " + this.priority + "\nCheck: " + this.check)
    }
}

export class TodoList {
    constructor(name) {
        this.name = name;
    }

    todoList = [];

    addTodoItem(item) {
        this.todoList.push(item);
    }

    removeTodoItem(item) {
        let index = this.todoList.indexOf(item);
        this.todoList.splice(index, 1);
    }

    getTodoItem(index) {
        return this.todoList[index];
    }

    getListName() { return this.name };

    getListLength() { return this.todoList.length };

    printTodoList() {
        console.log("Folder: " + this.name);
        this.todoList.forEach((item) => {
            console.log("\n");
            item.printTodoItem();
        });
    }
}

// export { TodoItem, TodoList }