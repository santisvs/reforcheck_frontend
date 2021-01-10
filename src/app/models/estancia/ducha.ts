import { Material } from "../tipos/material.enum";
import { DosdInterface } from "./commons/dosd";
import { ElementoInterface } from "./commons/elemento";
import { UnodInterface } from "./commons/unod";

export interface DuchaInterface extends ElementoInterface {
    demuele ?: boolean;
    material ?: Material;
    medida ?: DosdInterface;
    griferia_empotrada ?: boolean;
    mampara ?: boolean;
    recta ?: boolean;
    tramos ?: Array<UnodInterface>;
}
