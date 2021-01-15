import { Unidad } from "../tipos/unidad.enum";
import { Elemento } from "./commons/elemento";

export class MobiliarioObra extends Elemento {
    public cantidad : number;
    public unidad : Unidad;
    public desmontable : boolean;

    constructor(){
        super();
        this.cantidad = 0;
        this.unidad = Unidad.SIN_DEFINIR;
        this.desmontable = false;
    }
}
