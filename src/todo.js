export default function createTodo(
  title,
  description,
  priority,
  dueDate,
  checked = false
) {
  if (!description) {
    description = "No description";
  }

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getAttributes = () => [title, description, priority, dueDate];
  const getChecked = () => checked;

  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);
  const setAttributes = (newTitle, newDescription, newPriority, newDueDate) => {
    title = newTitle;
    description = newDescription;
    priority = newPriority;
    dueDate = newDueDate;
  };
  const toggleChecked = () => (checked = !checked);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getAttributes,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setAttributes,
    getChecked,
    toggleChecked,
  };
}
