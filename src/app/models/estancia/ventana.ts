import { Dosd } from "./commons/dosd";
import { Elemento } from "./commons/elemento";

export class Ventana extends Elemento{
    public medida : Dosd;
    public persiana : boolean;
    public capialzado : boolean;

    constructor(){
        super();
        this.medida = new Dosd();
        this.persiana = false;
        this.capialzado = false;
    }
}
