let projectCount = 0;
const projects = [];

function initializeProject(name) {
    const todos = [];

    projectCount++;
    const index = projectCount - 1;

    const getName = () => name;

    function addToProject(todo) {
        todos.push(todo);
    }
    const getIndex = function() {
        return(projects.indexOf(this));
    }

    function deleteTodo(todo) {
        const index = todos.indexOf(todo);
        if(index > -1) {
            todos.splice(index, 1);
        }
    }

    return {getName, addToProject, todos, getIndex, deleteTodo};
}

function createProject(name) {
    const project = initializeProject(name);
    projects.push(project);
    return project;
}

function deleteProject(project) {
    const index = project.getIndex();
    if(index === 0) {
        alert("Can't delete default project!");
    }
    else if(index > -1) {
        projects.splice(index, 1);
    }
}

createProject("default");

export {projects, createProject, deleteProject};