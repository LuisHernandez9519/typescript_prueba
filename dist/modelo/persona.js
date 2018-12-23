"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(_nombres, _apellidos) {
        this._nombres = _nombres;
        this._apellidos = _apellidos;
    }
    Object.defineProperty(Persona.prototype, "nombres", {
        get: function () {
            return this._nombres;
        },
        set: function (nombres) {
            this._nombres = nombres;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
