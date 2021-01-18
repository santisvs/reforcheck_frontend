import { Unod } from "./commons/unod";
import { Elemento } from "./commons/elemento";

export class Iluminacion extends Elemento {
    public empotrada : boolean;
    public focos : number;
    public down_lights : number;
    public tramos : Array<Unod>;

    constructor(){
        super();
        this.empotrada = false;
        this.focos = 0;
        this.down_lights = 0;
        this.tramos = [];
    }
}
