import { Unidad } from "../../tipos/unidad.enum";

export class Dosd {
    public alto : number;
    public largo : number;
    public unidad : Unidad;

    constructor() {
        this.alto = 0;
        this.largo = 0;
        this.unidad = Unidad.SIN_DEFINIR;
    }
}
