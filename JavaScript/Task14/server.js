const express = require('express');
const app = express();

app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

let students = [
    
    { id: 1, name: "tahany", age: 21, department: "computer science" },
    { id: 2, name: "ali", age: 22, department: "engineering" },
    { id: 3, name: "nada", age: 20, department: "computer science" }
];


//  task 1: search by department
// =========================
app.get('/students/search', (req, res) => {
    const dept = req.query.department?.toLowerCase().trim();

    const result = students.filter(s =>
        s.department.toLowerCase().trim() === dept
    );

    res.json(result);
});

//task 2: get all students
// =========================
app.get('/students', (req, res) => {
    res.json(students);
});

// task 3: get student by id
// =========================
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (student) {
        res.json({ student });
    } else {
        res.status(404).json({ error: "student not found" });
    }
});






//  task 4: add student
// =========================
app.post('/students', (req, res) => {
    const { name, age, department } = req.body;

    if (!name || !department || age <= 15) {
        return res.status(400).json({ error: "validation failed" });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        department
    };

    students.push(newStudent);

    res.status(201).json({
        message: "student created successfully",
        student: newStudent
    });
});



//  task 5: update student
// =========================
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ error: "student not found" });
    }

    const { name, age, department } = req.body;

    if (name) student.name = name;
    if (age) student.age = age;
    if (department) student.department = department;

    res.json({ message: "student updated successfully" });
});


//  task 6: delete student
// =========================
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({ message: "student deleted successfully" });
});



app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});