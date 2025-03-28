import { projects } from "./projects";
import createTodo from "./todo.js";
import DisplayManager from "./display.js";

export default function doDomThings() {
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
    
    form.addEventListener("submit", () => {
        projects[0].addToProject(createTodo(form.title.value, form.description.value, form.dueDate.value, form.priority.value));
        DisplayManager.displayProjects(projects);
        form.reset();
    });

    document.querySelector("body").appendChild(newTodoBtn);
}