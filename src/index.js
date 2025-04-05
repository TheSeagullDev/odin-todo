import "./styles.css";
import {projects} from "./projects.js" 
import DisplayManager from "./display.js";
import { initializeDom } from "./dom.js";
import createTodo from "./todo.js";

DisplayManager.displayProjects(projects);

initializeDom(projects);

// debugging function
function dummyTodos(num) {
    for(let i = 1; i <= num; i++) {
        projects[0].addToProject(createTodo(`Todo ${i}`, `Dummy description ${i}`, `${i}-${i}-25`, "none"));
        DisplayManager.displayProjects(projects);
    }
}

//dummyTodos(5);