import { Cantidad } from "../tipos/cantidad.enum";
import { Elemento } from "./commons/elemento";

export class Pintura extends Elemento {
    public fisuracion : Cantidad;
    public papel_pintado : boolean;
    public gotelet : boolean;
    public raspado : boolean;
    public color : string;
    public acabado : string;

    constructor(){
        super();
        this.fisuracion = Cantidad.SIN_DEFINIR;
        this.papel_pintado = false;
        this.gotelet = false;
        this.raspado = false;
        this.color = "";
        this.acabado = "";
    }
}
