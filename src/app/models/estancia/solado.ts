import { Dosd } from "./commons/dosd";
import { Elemento } from "./commons/elemento";

export class Solado extends Elemento {
    public tipo: string;
    public medida: Dosd;

    constructor(){
        super();
        this.tipo = "";
        this.medida = new Dosd();
    }
}
