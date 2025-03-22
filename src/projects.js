function createProject(name) {
    const todos = [];

    const getName = () => name;

    function addToProject(todo) {
        todos.push(todo);
    }

    return {getName, addToProject, todos}
}

const projects = [createProject("default")];

export {projects, createProject};