import { Unod } from "./commons/unod";
import { Elemento } from "./commons/elemento";

export class Rodapie extends Elemento {
    public tipo : string;
    public alto : Unod;
    public largo : Unod;
    public ancho : Unod;

    constructor(){
        super();
        this.tipo = "";
        this.alto = new Unod();
        this.largo = new Unod();
        this.ancho = new Unod();
    }
}
