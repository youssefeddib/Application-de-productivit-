const addTaskBtn = document.getElementById("addTaskBtn");
    const Inputk = document.getElementById("inputtask");
    const taskContainer = document.getElementById("taskContainer");
    const completedTaskContainer = document.getElementById("completedTaskContainer");
    const startTimer = document.getElementById("startTimer");
    const stopTimer = document.getElementById("stopTimer");
    const timerDisplay = document.getElementById("timerDisplay");

    let timer;
    let timeLeft = 1500;

    