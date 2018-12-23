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
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(_nombres, _apellidos, _curso) {
        var _this = _super.call(this, _nombres, _apellidos) || this;
        _this._curso = _curso;
        return _this;
    }
    Object.defineProperty(Profesor.prototype, "curso", {
        get: function () {
            return this._curso;
        },
        set: function (_curso) {
            this._curso = _curso;
        },
        enumerable: true,
        configurable: true
    });
    Profesor.prototype.ensenar = function () {
        console.log("estoy enseñando.");
    };
    //metodo abstracto
    Profesor.prototype.saludar = function () {
        console.log("\n        Hola soy el profesor " + this.nombres + " " + this.apellidos + " y ense\u00F1o el curso de " + this.curso + "\n        ");
    };
    return Profesor;
}(persona_1.Persona));
exports.Profesor = Profesor;
