const DisplayManager = (function() {
    let projects = [];
    const projectContainer = document.querySelector(".content");

    function displayProject(project) {
        const container = document.createElement("div");
        const title = document.createElement("h2");
        title.textContent = project.getName();
        projectContainer.appendChild(container);
        container.appendChild(title);
        for(let i = 0; i < project.todos.length; i++)
        {
            displayTodo(project.todos[i], container);
        }
    }

    function displayTodo(todo, container) {
        const todoElem = document.createElement("div");
        todoElem.classList.add("todo");
        const todoAttributes = todo.getAttributes();
        const todoChildren = [];
        container.appendChild(todoElem);
        todoElem.dataset.title = todo.getTitle();
        todoElem.dataset.description = todo.getDescription();
        todoElem.dataset.priority = todo.getPriority();
        todoElem.dataset.dueDate = todo.getDueDate();
        for(let i = 0; i < 4; i++) {
            todoChildren.push(document.createElement("div"));
            todoChildren[i].textContent = todoAttributes[i];
            todoElem.appendChild(todoChildren[i]);
        }
    }

    function clearPage() {
        projectContainer.innerHTML = "";
    }

    function displayProjects(projects) {
        clearPage();
        for(let i = 0; i < projects.length; i++) {
            displayProject(projects[i]);
        }
    }

    return {displayProjects, displayTodo}
})();

export default DisplayManager;