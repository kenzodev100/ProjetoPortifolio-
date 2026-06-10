var lista = document.getElementById("taskList");
var btn = document.getElementById("addTaskBtn");
var input = document.getElementById("taskInput");

function salvarTasks() {
    const tarefas = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tarefas.push(li.childNodes[0].textContent);
    });

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function criarTask(task) {
    var li = document.createElement("li");
    li.textContent = task;

    var btnX = document.createElement("button");
    btnX.textContent = "X";

    btnX.addEventListener("click", function () {
        li.remove();
        salvarTasks();
    });

    li.appendChild(btnX);
    lista.appendChild(li);
}

function adcTask() {
    var task = input.value.trim();

    if (task === "") {
        alert("ta vazio krai");
        return;
    }

    criarTask(task);
    salvarTasks();

    input.value = "";
}

btn.addEventListener("click", adcTask);


window.addEventListener("load", function () {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    
    tarefas.forEach(task => {
        criarTask(task);
    });
});