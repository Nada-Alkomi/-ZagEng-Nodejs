function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
    alert("Please enter a task");
    return;
    }

    let tr = document.createElement("tr");
    let tdTask = document.createElement("td");
    tdTask.textContent = taskText;


    let tdStatus = document.createElement("td");
    tdStatus.textContent = "Pending";


    tdTask.onclick = function () {
    tdTask.classList.toggle("done");

    if (tdStatus.textContent === "Pending") {
        tdStatus.textContent = "Done";
    } else {
        tdStatus.textContent = "Pending";
    }
    };


    let tdAction = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function () {
    tr.remove();
    };

    tdAction.appendChild(btn);

    tr.appendChild(tdTask);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAction);

    document.getElementById("taskTable").appendChild(tr);

    input.value = "";
}
