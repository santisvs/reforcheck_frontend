import { Material } from "../tipos/material.enum";
import { ElementoInterface } from "./commons/elemento";
import { TresdInterface } from "./commons/tresd";
import { UnodInterface } from "./commons/unod";

export interface BaneraInterface extends ElementoInterface {
    demuele ?: boolean;
    material ?: Material;
    medida ?: TresdInterface;
    griferia_empotrada ?: boolean;
    mampara ?: boolean;
    recta ?: boolean;
    tramos ?: Array<UnodInterface>;
}
