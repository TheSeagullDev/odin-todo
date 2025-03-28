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

const button = document.createElement("button");
button.textContent = "button";
button.addEventListener("click", () => {
    projects[0].addToProject(createTodo("dummy title", "dummy description", 1111, Math.random()*20));
    DisplayManager.displayProjects(projects);
});

document.querySelector("body").appendChild(button);