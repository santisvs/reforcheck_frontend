import { Material } from "../tipos/material.enum";
import { Elemento } from "./commons/elemento";
import { Tresd } from "./commons/tresd";
import { Unod } from "./commons/unod";

export class Banera extends Elemento {
    public demuele : boolean;
    public material : Material;
    public medida : Tresd;
    public griferia_empotrada : boolean;
    public mampara : boolean;
    public recta : boolean;
    public tramos : Array<Unod>;

    constructor(){
        super();
        this.demuele = false;
        this.material = Material.SIN_DEFINIR;
        this.medida = new Tresd();
        this.griferia_empotrada = false;
        this.mampara = false;
        this.recta = false;
        this.tramos = [];
    }
}
