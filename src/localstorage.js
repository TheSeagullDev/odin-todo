import { createProject, projects } from "./projects";
import createTodo from "./todo";

function updateLocalStorage(projects) {
    localStorage.clear();
    for(let i = 0; i < projects.length; i++) {
        const localTodos = [projects[i].getName()];
        for(let j = 0; j < projects[i].todos.length; j++) {
            localTodos.push(projects[i].todos[j].getAttributes());
            localTodos[j + 1].push(projects[i].todos[j].getChecked());
        }
        localStorage.setItem(`project${i}`, JSON.stringify(localTodos));
    }
}

function retrieveFromStorage(index) {
    return JSON.parse(localStorage.getItem(`project${index}`));
}

function initializeInfo() {
    if(localStorage.length > 0) {
        for(let project = 0; project < localStorage.length; project++) {
            if(project == 0) {
                const retrievedTodos = retrieveFromStorage(0).slice(1);
                console.log(project);
                console.log(retrievedTodos);
                for(let todo = 0; todo < retrievedTodos.length; todo++) {
                    const todoObj = retrievedTodos[todo];
                    projects[project].addToProject(createTodo.apply(null, todoObj));
                }
            }
            else {
                console.log(project);
                const retrievedTodos = retrieveFromStorage(project).slice(1);
                console.log(retrievedTodos);
                createProject(retrieveFromStorage(project)[0]);
                console.log(projects);
                for(let todo = 0; todo < retrievedTodos.length; todo++) {
                    const todoObj = retrievedTodos[todo];
                    projects[project].addToProject(createTodo.apply(null, todoObj));
                }
            }
        }
    }
}
export {updateLocalStorage, retrieveFromStorage, initializeInfo};