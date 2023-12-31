const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
};

function painToDo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    painToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("hello", item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(saveTodos);
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(painToDo);
}

function sexyFilter() {

}