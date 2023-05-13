function saveTask() {
    saveARecord("#newTask");
  }
  
  function saveARecord(textInputId) {
    let taskUI = document.querySelector("#taks");
    let newRecord = document.querySelector(textInputId).value;
    if (newRecord == "") {
      alert("Enter something..");
      return;
    }
    let newTask = document.createElement("li");
        newTask.setAttribute("type",1)
        alert("New task is Added")
        newTask.innerHTML = newRecord;
   newTask.onclick = function() {
      alert("This task is Deleted")
      taskUI.removeChild(this);
    }
    taskUI.appendChild(newTask);
  }
