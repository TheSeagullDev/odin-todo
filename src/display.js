import { promptForEdit, promptForTodo } from "./dom";
import { deleteProject, projects } from "./projects";

const DisplayManager = (function() {
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
        const newTodoButton = document.createElement("button");
        newTodoButton.textContent = "New Todo";
        newTodoButton.addEventListener("click", () => {
            promptForTodo(project);
        });
        container.appendChild(newTodoButton);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Project";
        deleteButton.addEventListener("click", () => {
            deleteProject(project);
            displayProjects(projects);
        });
        container.appendChild(deleteButton);
    }

    function displayTodo(todo, container) {
        const todoElem = document.createElement("div");
        todoElem.classList.add("todo");
        container.appendChild(todoElem);
        todoElem.dataset.title = todo.getTitle();
        todoElem.dataset.description = todo.getDescription();
        todoElem.dataset.priority = todo.getPriority();
        todoElem.dataset.dueDate = todo.getDueDate();
        const done = document.createElement("input");
        done.type = "checkbox";
        todoElem.appendChild(done);
        const title = document.createElement("div");
        title.textContent = todo.getTitle();
        todoElem.appendChild(title);
        const description = document.createElement("div");
        description.textContent = todo.getDescription();
        todoElem.appendChild(description);
        const dueDate = document.createElement("div");
        dueDate.classList.add("date");
        dueDate.textContent = todo.getDueDate();
        todoElem.appendChild(dueDate);
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            promptForEdit(todo);
        })
        todoElem.appendChild(editBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            projects[container.dataset.project].deleteTodo(todo);
            displayProjects(projects);
        })
        todoElem.appendChild(deleteBtn);
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