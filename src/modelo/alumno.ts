import { Persona } from "./persona";
export class Alumno extends Persona{
    constructor(_nombres:string, _apellidos: string, public _carrera: string) {
        super(_nombres, _apellidos);
    }
    set carrera(_carrera: string){
        this._carrera = _carrera;
    }
    get carrera(): string{
        return this._carrera;
    }

    estudiar(): void{
        console.log("estoy estudiando we")
    }
    //metodo abstracto
    saludar(){
        console.log(`
        Hola soy ${this.nombres} ${this.apellidos} y estudio ${this.carrera}
        `);
    }
}