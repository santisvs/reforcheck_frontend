import { Elemento } from "./commons/elemento";

export class Techo extends Elemento {
    public falso_techo : boolean;
    public moldura : boolean;
    public demuele : boolean;

    constructor(){
        super();
        this.falso_techo = false;
        this.moldura = false;
        this.demuele = false;
    }
}
