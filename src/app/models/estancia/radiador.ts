import { Tresd } from "./commons/tresd";
import { Elemento } from "./commons/elemento";
import { Material } from "../tipos/material.enum";

export class Radiador extends Elemento {
    public energia: string;
    public material: Material;
    public medida : Tresd;
    public num_elementos : number;

    constructor(){
        super();
        this.energia = "";
        this.material = Material.SIN_DEFINIR;
        this.medida = new Tresd();
        this.num_elementos = 0;
    }
}
