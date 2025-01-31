const addTaskBtn = document.getElementById("addTaskBtn");
const Inputk = document.getElementById("inputtask");
const taskContainer = document.getElementById("taskContainer");
const completedTaskContainer = document.getElementById("completedTaskContainer");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const timerDisplay = document.getElementById("timerDisplay");

let timer;
let timeLeft = 1500; 


addTaskBtn.addEventListener("click", () => {
    let taskText = Inputk.value.trim();
    Inputk.clearInterval;
    if (taskText) {
        let taskItem = document.createElement("li");
        taskItem.classList.add("list-group-item", "bg-dark", "text-white", "d-flex", "justify-content-between");
        taskItem.innerHTML = `${taskText} <button class="btn">✔</button>`;

        taskItem.querySelector("button").addEventListener("click", () => {
            completedTaskContainer.appendChild(taskItem);
            taskItem.querySelector("button").remove();
        });

        taskContainer.appendChild(taskItem);
    }
});

