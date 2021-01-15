import { Tresd } from "./commons/tresd";
import { Elemento } from "./commons/elemento";
import { Fabricante } from "./commons/fabricante";
import { Info } from "./commons/info";

export class Puerta extends Elemento {
    public medida : Tresd;
    public estandar : boolean;
    public espesor_tabique : number;
    public mano : boolean; // Izquierda true, Derecha false;

    constructor(){
        super();
        this.medida = new Tresd();
        this.estandar = false;
        this.espesor_tabique = 0;
        this.mano = false;
    }
}
