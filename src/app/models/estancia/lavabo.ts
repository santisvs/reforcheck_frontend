import { Material } from "../tipos/material.enum";
import { ElementoInterface } from "./commons/elemento";
import { TresdInterface } from "./commons/tresd";

export interface LavaboInterface extends ElementoInterface {
    senos ?: number;
    demuele ?: boolean;
    mueble ?: boolean;
    material ?: Material;
    medida ?: TresdInterface;
    griferia_empotrada ?: boolean;
}
