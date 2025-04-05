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
        if(i < 10) {
            projects[0].addToProject(createTodo(`Todo ${i}`, `Dummy description ${i}`, `2025-0${i}-0${i}`, "none"));
            DisplayManager.displayProjects(projects);
        }
        else
        {
            projects[0].addToProject(createTodo(`Todo ${i}`, `Dummy description ${i}`, `2025-${i}-${i}`, "none"));
            DisplayManager.displayProjects(projects);
        }
    }
}

dummyTodos(5);