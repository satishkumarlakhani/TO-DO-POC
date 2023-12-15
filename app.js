document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("taskInput").focus();
  });
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
  
      const uncompletedList = document.getElementById("uncompletedList");
      uncompletedList.appendChild(li);
  
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.onclick = function () {
        completeTask(li);
      };
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        deleteTask(li);
      };
  
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
  
      taskInput.value = "";
      taskInput.focus();
    }
  }
  
  function completeTask(task) {
    const uncompletedList = document.getElementById("uncompletedList");
    const completedList = document.getElementById("completedList");
  
    task.querySelector(".complete").remove();
  
    const uncompleteButton = document.createElement("button");
    uncompleteButton.textContent = "Uncomplete";
    uncompleteButton.onclick = function () {
      uncompleteTask(task);
    };
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTask(task);
    };
  
    li.appendChild(uncompleteButton);
    li.appendChild(deleteButton);
  
    completedList.appendChild(task);
  }
  
  function uncompleteTask(task) {
    const uncompletedList = document.getElementById("uncompletedList");
    const completedList = document.getElementById("completedList");
  
    task.querySelector(".uncomplete").remove();
  
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
      completeTask(task);
    };
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTask(task);
    };
  
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
  
    uncompletedList.appendChild(task);
  }
  
  function deleteTask(task) {
    task.remove();
  }
  