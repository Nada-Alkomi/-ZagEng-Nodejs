let students = [];


function addStudent() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value.trim();


  if (name === "" || grade === "") {
    alert("Please enter name and grade");
    return;
  }

  if (age === "" || age <= 0) {
    alert("Please enter a valid age");
    return;
  }

  let student = {
    name: name,
    age: age,
    grade: grade
  };

  students.push(student);
  displayStudents();
  clearInputs();
}

function displayStudents() {
    let tbody = document.getElementById("studentTable");
  tbody.innerHTML = "";

  students.forEach((student, index) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
    `;

    tbody.appendChild(tr);
  });
}



function saveJSON() {
  let json = JSON.stringify(students);
  document.getElementById("jsonData").value = json;
}


function loadJSON() {
  let json = document.getElementById("jsonData").value;

  if (json === "") {
    alert("JSON data is empty");
    return;
  }

  students = JSON.parse(json);
  displayStudents();
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("grade").value = "";
}
