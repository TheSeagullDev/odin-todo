import { projects, createProject } from "./projects";
import createTodo from "./todo.js";
import DisplayManager from "./display.js";

const toDoModal = document.querySelector(".todo-form-container");
const projectModal = document.querySelector(".project-form-container");
const editModal = document.querySelector(".edit-form-container");
const toDoForm = document.querySelector("#todo-form");
const projectForm = document.querySelector("#project-form");
const editForm = document.querySelector("#edit-form")

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

    const editModalClose = document.querySelector("#editclose");
    editModalClose.addEventListener("click", () => {
        editModal.close();
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
    });

}

function promptForTodo(project) {
    toDoForm.dataset.project = project.getIndex();
    toDoModal.showModal();
}

function promptForEdit(todo) {
    function editTodo() {
        todo.setTitle(editForm.edittitle.value);
        todo.setDescription(editForm.editdescription.value);
        todo.setDueDate(editForm.editdueDate.value);
        todo.setPriority(editForm.editpriority.value);
        DisplayManager.displayProjects(projects);
        editForm.removeEventListener("submit", editTodo);
    }
    editForm.addEventListener("submit", editTodo);
    editModal.showModal();
    for(let i = 0; i < 4; i++){
        const elem = editForm.elements[i];
        elem.value = todo.getAttributes()[i];
    }
}

export { initializeDom, promptForTodo, promptForEdit };