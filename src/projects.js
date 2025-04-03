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

    return {getName, addToProject, todos, getIndex};
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