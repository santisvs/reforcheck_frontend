import { Tresd } from "./commons/tresd";
import { Elemento } from "./commons/elemento";

export class Armario extends Elemento {
    public medida : Tresd;

    constructor(){
        super();
        this.medida = new Tresd();
    }
}
