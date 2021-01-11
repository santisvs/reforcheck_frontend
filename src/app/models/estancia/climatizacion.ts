import { Elemento } from "./commons/elemento";

export class Climatizacion extends Elemento {
    public bomba_calor : boolean;
    public red_conductos : boolean;
    public ventilador : boolean;

    constructor(){
        super();
        this.bomba_calor = false;
        this.red_conductos = false;
        this.ventilador = false;
    }
}
