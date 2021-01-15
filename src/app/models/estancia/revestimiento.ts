import { Dosd } from "./commons/dosd";
import { Elemento } from "./commons/elemento";

export class Revestimiento extends Elemento {
    public medida : Dosd;
    public ceramico: boolean;
    public friso : boolean;
    public panelado : boolean;
    public moldura : boolean;
    public demuele : boolean;

    constructor(){
        super();
        this.medida = new Dosd();
        this.ceramico = false;
        this.friso = false;
        this.panelado = false;
        this.moldura = false;
        this.demuele = false;
    }
}
