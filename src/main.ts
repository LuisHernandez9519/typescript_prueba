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

console.log("hola man");


 /*este pedazo será para pueba */
 let numero1:number, numero2: number;
 numero1 = 50, numero2 = 20;

/* 
*/
console.log("esto es de prueba para master");

console.log("asdad hola we");

console.log(3+4);

console.log(3*9);
console.log("hola man");

console.log("hola prro");

