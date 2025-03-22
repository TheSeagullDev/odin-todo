import "./styles.css";
import {projects, createProject} from "./projects.js" 
import DisplayManager from "./display.js";

function createTodo(title, description, dueDate, priority) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
    const setPriority = (newPriority) => priority = newPriority;

    return {getTitle, getDescription, getDueDate, getPriority, setTitle, setDescription, setDueDate, setPriority}
}

DisplayManager.updateData(projects);

DisplayManager.displayProject(projects[0]);

