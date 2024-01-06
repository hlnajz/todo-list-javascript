const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Add ToDo!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTodo();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTodo();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTodo();
    }
  },
  false
);

function saveTodo() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTodo() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTodo();
