"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(_nombres, _apellidos, _carrera) {
        var _this = _super.call(this, _nombres, _apellidos) || this;
        _this._carrera = _carrera;
        return _this;
    }
    Object.defineProperty(Alumno.prototype, "carrera", {
        get: function () {
            return this._carrera;
        },
        set: function (_carrera) {
            this._carrera = _carrera;
        },
        enumerable: true,
        configurable: true
    });
    Alumno.prototype.estudiar = function () {
        console.log("estoy estudiando we");
    };
    //metodo abstracto
    Alumno.prototype.saludar = function () {
        console.log("\n        Hola soy " + this.nombres + " " + this.apellidos + " y estudio " + this.carrera + "\n        ");
    };
    return Alumno;
}(persona_1.Persona));
exports.Alumno = Alumno;
