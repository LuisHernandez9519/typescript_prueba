export abstract class Persona {
    constructor(protected _nombres: string, protected _apellidos: string) {
        
    }

    set nombres(nombres: string){
        this._nombres = nombres;
    }

    get nombres(): string{
        return this._nombres;
    }

    set apellidos(apellidos: string){
        this._apellidos = apellidos;
    }

    get apellidos(): string{
        return this._apellidos;
    }

    abstract saludar(): void;
}