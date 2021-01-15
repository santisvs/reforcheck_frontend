import { Unidad } from "../../tipos/unidad.enum";

export class Unod {
    public tamano : number;
    public unidad : Unidad;

    constructor() {
        this.tamano = 0;
        this.unidad = Unidad.SIN_DEFINIR;
    }
}
