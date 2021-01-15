import { Fabricante } from "./fabricante";
import { Info } from "./info";

export class Elemento {
    public id : string; 
    public info : Info;
    public fabricante : Fabricante;

    constructor() {
        this.id = "";
        this.info = new Info();
        this.fabricante = new Fabricante();
    }
}
