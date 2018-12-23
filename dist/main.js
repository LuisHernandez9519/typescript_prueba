"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alumno_1 = require("./modelo/alumno");
var profesor_1 = require("./modelo/profesor");
var alumno;
alumno = new alumno_1.Alumno("Luis Fernando", "Hernández Castilla", "Ingeniería de Sistemas");
alumno.saludar();
alumno.estudiar();
var profesor;
profesor = new profesor_1.Profesor("Mark", "Zuckerberg", "Programación orientada a objetos");
profesor.saludar();
profesor.ensenar();
/*este pedazo será para pueba */
var numero1, numero2;
numero1 = 50, numero2 = 20;
