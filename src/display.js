const DisplayManager = (function() {
    let projects = [];
    const projectContainer = document.querySelector("body");

    function updateData(newProjects) {
        projects = newProjects;
    }

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
        todoElem.textContent = todo.getTitle();
        container.appendChild(todoElem);
    }

    return {displayProject, displayTodo, updateData}
})();

export default DisplayManager;