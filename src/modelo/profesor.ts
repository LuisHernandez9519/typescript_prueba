import { Persona } from "./persona";
export class Profesor extends Persona{
    constructor(_nombres: string, _apellidos: string, public _curso: string) {
        super(_nombres, _apellidos);
    }

    set curso(_curso: string){
        this._curso = _curso;
    }

    get curso(): string{
        return this._curso;
    }
    ensenar(): void{
        console.log("estoy enseñando.");
    }
    //metodo abstracto
    saludar(): void{
        console.log(`
        Hola soy el profesor ${this.nombres} ${this.apellidos} y enseño el curso de ${this.curso}
        `);
    }
}