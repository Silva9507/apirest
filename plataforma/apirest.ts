import express from 'express';

const app = express(); 
const PORT = 3000;

app.use(express.json());

interface estudiante {
    id: string;
    name: string;
    cc: string;
    email: string;
    cel: string;
    address: string;
}


let student: estudiante[] = [
    {
        id: "carlos07",
        name: "luis carlos",
        cc: "1063814963",
        email: "carlos.07@mail.com",
        cel: "3108763498",
        address: "Popayan-Timbio"
    },
];

app.get('/students', function (request, response) {
    response.json(student);
});

app.get('/students/:id', function (request, response) {
    const id = request.params.id;
    const result = student.filter(item => item.id === id);
    response.json(result);
});


app.post('/students', function (request, response) {
    const body = request.body;
    student.push(body);
    response.send('El alumno se ha guardado');
});

app.put('/students/:id', function (request, response) {

    const id = request.params.id;
    const body = request.body;
    const customerIndex = student.findIndex(item => item.id === id);
    console.log("customerIndex", customerIndex);
    student[customerIndex] = body;
    response.send('alumno actualizado correctamente');
});

app.delete('/cstudents/:id', function (request, response) {
    const id = request.params.id;
    const result = student.filter(item => item.id !== id);
    student = result;
    response.json("alumno eliminado correctamente");
});


app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});


/* {
    id: "valentina14",
    name: "valentina mosquera",
    cc: "1063983403",
    email: "tina.14@mail.com",
    cel: "3148762983",
    address: "Popayan-Timbio"
}*/