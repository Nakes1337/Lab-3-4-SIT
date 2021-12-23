const express = require("express");
const app = express();
var students = [
    {
        id: 1,
        firstName: "Ivan",
        lastName: "Ivanov",
        group: "VPI31",
        createdAt: "2020-03-02T12:41:09.533Z",
        updatedAt: "2020-03-02T12:45:02.121Z"
    },
    {
        id: 2,
        firstName: "Fedor",
        lastName: "Petrov",
        group: "VPI51",
        createdAt: "2020-03-02T12:41:09.533Z",
        updatedAt: "2020-03-02T12:45:02.121Z"
    },
    {
        id: 3,
        firstName: "George",
        lastName: "Bush",
        group: "VPI31",
        createdAt: "2020-03-02T12:41:09.533Z",
        updatedAt: "2020-03-02T12:45:02.121Z"
    },
    {
        id: 4,
        firstName: "Dima",
        lastName: "Ivanov",
        group: "VPI31",
        createdAt: "2020-03-02T12:41:09.533Z",
        updatedAt: "2020-03-02T12:45:02.121Z"
    },
    {
        id: 5,
        firstName: "Batya",
        lastName: "Ivanov",
        group: "VPI31",
        createdAt: "2020-03-02T12:41:09.533Z",
        updatedAt: "2020-03-02T12:45:02.121Z"
    }
];

app.get("/student", function (req, res) {
    // весь список
    res.send(students);
});

app.get("/student/:id", function (req, res) {
    // студент оп id
    const id = req.params.id; // получаем id
    let user = null;
    // находим в массиве пользователя по id
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            user = students[i];
            break;
        }
    }
    // отправляем пользователя
    if (user) {
        res.send(user);
    } else {
        res.status(404).send();
    }
});
app.get("/", function (req, res) {
    res.send("GET");
});

app.post("/student", function (req, res) {
    var id = students.length + 1;
    var student = {
        id: id++,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        group: req.query.group,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    students.push(student);
    res.send("Posting");
});

app.delete("/student/:id", function (req, res) {
    const id = req.params.id - 1; // получаем id
    if (id !== -1) students.splice(id, 1);
    else res.send("Ошибка");
    res.send(students);
});

app.put("/student/:id", function (req, res) {
    const id = req.params.id - 1;
    for (var i = 0; i < students.length; i++) {
        if (i === id) {
            students[id].firstName = req.query.firstName;
            students[id].lastName = req.query.lastName;
            students[id].group = req.query.group;
            students[id].updatedAt = new Date();
            break;
        } else res.send("Такого пользователя нет");
    }
    res.send(students[id]);
});

app.listen(1337, function () {
    console.log("Updating...");
});