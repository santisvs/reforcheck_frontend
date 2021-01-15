import { Material } from "../tipos/material.enum";
import { Elemento } from "./commons/elemento";
import { Tresd } from "./commons/tresd";

export class Lavabo extends Elemento {
    public senos : number;
    public demuele : boolean;
    public mueble : boolean;
    public material : Material;
    public medida : Tresd;
    public griferia_empotrada : boolean;

    constructor(){
        super();
        this.senos = 0;
        this.demuele = false;
        this.mueble = false;
        this.material = Material.SIN_DEFINIR;
        this.medida = new Tresd();
        this.griferia_empotrada = false;
    }
}
