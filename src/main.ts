import { Persona } from "./modelo/persona";
import { Alumno } from "./modelo/alumno";
import { Profesor } from "./modelo/profesor";

let alumno: Persona;
 alumno = new Alumno("Luis Fernando", "Hernández Castilla", "Ingeniería de Sistemas");
 (alumno as Alumno).saludar();
 (alumno as Alumno).estudiar();

 let profesor: Profesor;
 profesor = new Profesor("Mark", "Zuckerberg", "Programación orientada a objetos");
 (profesor as Profesor).saludar();
 (profesor as Profesor).ensenar();
