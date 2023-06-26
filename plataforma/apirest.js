"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
app.use(express_1.default.json());
var student = [
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
    var id = request.params.id;
    var result = student.filter(function (item) { return item.id === id; });
    response.json(result);
});
app.post('/students', function (request, response) {
    var body = request.body;
    student.push(body);
    response.send('El alumno se ha guardado');
});
app.put('/students/:id', function (request, response) {
    var id = request.params.id;
    var body = request.body;
    var customerIndex = student.findIndex(function (item) { return item.id === id; });
    console.log("customerIndex", customerIndex);
    student[customerIndex] = body;
    response.send('alumno actualizado correctamente');
});
app.delete('/cstudents/:id', function (request, response) {
    var id = request.params.id;
    var result = student.filter(function (item) { return item.id !== id; });
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
