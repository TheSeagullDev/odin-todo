import { projects, createProject } from "./projects";
import createTodo from "./todo.js";
import DisplayManager from "./display.js";

const toDoModal = document.querySelector(".todo-form-container");
const projectModal = document.querySelector(".project-form-container");
const toDoForm = document.querySelector("#todo-form");
const projectForm = document.querySelector("#project-form");

function initializeDom() {
    const newProjectBtn = document.querySelector("#new-project");

    newProjectBtn.addEventListener("click", () => {
        projectModal.showModal();
    })

    const toDoModalClose = document.querySelector("#todoclose");
    toDoModalClose.addEventListener("click", () => {
        toDoModal.close();
    });

    const projectModalClose = document.querySelector("#projectclose");
    projectModalClose.addEventListener("click", () => {
        projectModal.close();
    });
    
    toDoForm.addEventListener("submit", () => {
        projects[toDoForm.dataset.project].addToProject(createTodo(toDoForm.todotitle.value, toDoForm.tododescription.value, toDoForm.tododueDate.value, toDoForm.todopriority.value));
        DisplayManager.displayProjects(projects);
        toDoForm.reset();
    });

    projectForm.addEventListener("submit", () => {
        createProject(projectForm.projecttitle.value);
        DisplayManager.displayProjects(projects);
        projectForm.reset();
    })
}

function promptForTodo(project) {
    toDoForm.dataset.project = project.getIndex();
    toDoModal.showModal();
}

export { initializeDom, promptForTodo };