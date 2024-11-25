const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Função para adicionar uma nova tarefa
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  // Criação do item da lista
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  // Título da tarefa
  const taskTitle = document.createElement("span");
  taskTitle.textContent = taskText;

  // Botão de exclusão
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  // Monta o item da lista
  listItem.appendChild(taskTitle);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  // Limpa o campo de entrada
  taskInput.value = "";
}

// Evento de clique no botão "Adicionar"
addTaskButton.addEventListener("click", addTask);

// Permite adicionar tarefa ao pressionar "Enter"
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
