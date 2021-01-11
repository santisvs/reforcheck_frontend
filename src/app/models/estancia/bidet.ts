import { Material } from "../tipos/material.enum";
import { Elemento } from "./commons/elemento";
import { Tresd } from "./commons/tresd";

export class Bidet extends Elemento {
    public suspendido : boolean;
    public demuele : boolean;
    public material : Material;
    public medida : Tresd;

    constructor(){
        super();
        this.suspendido = false;
        this.demuele = false;
        this.material = Material.SIN_DEFINIR;
        this.medida = new Tresd();
    }
}
