import "./styles.css";
import {projects, createProject} from "./projects.js" 
import DisplayManager from "./display.js";

function createTodo(title, description, dueDate, priority) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getAttributes = () => [title, description, dueDate, priority];

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
    const setPriority = (newPriority) => priority = newPriority;

    return {getTitle, getDescription, getDueDate, getPriority, getAttributes, setTitle, setDescription, setDueDate, setPriority}
}

DisplayManager.displayProjects(projects);

const newTodoBtn = document.querySelector("#new-todo");
const modal = document.querySelector("dialog");
const form = document.querySelector("form");
newTodoBtn.addEventListener("click", () => {
    modal.showModal();
});

const modalClose = document.querySelector("#close");
modalClose.addEventListener("click", () => {
    modal.close();
});

const modalSubmit = document.querySelector("#submit");
modalSubmit.addEventListener("click", () => {
    projects[0].addToProject(createTodo(form.title.value, form.description.value, form.dueDate.value, form.priority.value));
    DisplayManager.displayProjects(projects);
});

document.querySelector("body").appendChild(newTodoBtn);