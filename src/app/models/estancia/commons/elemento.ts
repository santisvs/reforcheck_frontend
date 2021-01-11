import { Fabricante } from "./fabricante";
import { Info } from "./info";

export class Elemento {
    public info : Info;
    public fabricante : Fabricante;

    constructor() {
        this.info = new Info();
        this.fabricante = new Fabricante();
    }
}
