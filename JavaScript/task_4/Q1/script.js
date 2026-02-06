let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;

  if (name === "" || age === "" || grade === "") {
    alert("Please fill in all fields");
    return;
  }

  let student = {
    name: name,
    age: age,
    grade: grade
  };

  students.push(student);
  displayStudents();

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("grade").value = "";
}

function displayStudents() {
  let tbody = document.getElementById("studentTable");
  tbody.innerHTML = "";

  students.forEach(function(student, index) {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.textContent = student.name;

    let tdAge = document.createElement("td");
    tdAge.textContent = student.age;

    let tdGrade = document.createElement("td");
    tdGrade.textContent = student.grade;

    let tdAction = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function () {
      deleteStudent(index);
    };

    tdAction.appendChild(btn);

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdGrade);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
