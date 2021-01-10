import { Unidad } from "../../tipos/unidad.enum";

export class Tresd {
    public alto : number;
    public largo : number;
    public ancho : number;
    public unidad : Unidad;

    constructor() {
        this.alto = 0;
        this.largo = 0;
        this.ancho = 0;
        this.unidad = Unidad.SIN_DEFINIR;
    }
}
