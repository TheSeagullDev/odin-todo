let projectCount = 0;

function createProject(name) {
    const todos = [];

    projectCount++;
    const index = projectCount - 1;

    const getName = () => name;

    function addToProject(todo) {
        todos.push(todo);
    }

    const getIndex = () => index;

    return {getName, addToProject, todos, getIndex}
}

const projects = [createProject("default")];

export {projects, createProject};