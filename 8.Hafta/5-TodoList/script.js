const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoItem = document.createElement("li");
    if (todo && todo.completed) {
      todoItem.classList.add("completed");
    }

    todoItem.innerText = todoText;

    todoItem.addEventListener("click", () => {
      todoItem.classList.toggle("completed");
      updateLS();
    });

    todoItem.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoItem.remove();
      updateLS();
    });

    todosUL.appendChild(todoItem);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  todosItem = document.querySelectorAll("li");

  const todos = [];

  todosItem.forEach((todoItem) => {
    todos.push({
      text: todoItem.innerText,
      completed: todoItem.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
