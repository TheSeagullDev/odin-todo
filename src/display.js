const DisplayManager = (function() {
    let projects = [];
    const projectContainer = document.querySelector(".content");

    function displayProject(project) {
        const container = document.createElement("div");
        container.dataset.project = project.getIndex();
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
        container.appendChild(todoElem);
        todoElem.dataset.title = todo.getTitle();
        todoElem.dataset.description = todo.getDescription();
        todoElem.dataset.priority = todo.getPriority();
        todoElem.dataset.dueDate = todo.getDueDate();
        const title = document.createElement("div");
        title.textContent = todo.getTitle();
        todoElem.appendChild(title);
        const description = document.createElement("div");
        description.textContent = todo.getDescription();
        todoElem.appendChild(description);
        const dueDate = document.createElement("div");
        dueDate.textContent = todo.getDueDate();
        todoElem.appendChild(dueDate);
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