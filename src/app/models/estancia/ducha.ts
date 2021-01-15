import { Material } from "../tipos/material.enum";
import { Dosd } from "./commons/dosd";
import { Elemento } from "./commons/elemento";
import { Unod } from "./commons/unod";

export class Ducha extends Elemento {
    public demuele : boolean;
    public material : Material;
    public medida : Dosd;
    public griferia_empotrada : boolean;
    public mampara : boolean;
    public recta : boolean;
    public tramos : Array<Unod>;

    constructor(){
        super();
        this.demuele = false;
        this.material = Material.SIN_DEFINIR;
        this.medida = new Dosd();
        this.griferia_empotrada = false;
        this.mampara = false;
        this.recta = false;
        this.tramos = [];
    }
}
