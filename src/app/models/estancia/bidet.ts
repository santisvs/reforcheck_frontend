import { Material } from "../tipos/material.enum";
import { ElementoInterface } from "./commons/elemento";
import { TresdInterface } from "./commons/tresd";

export interface BidetInterface extends ElementoInterface {
    suspendido ?: boolean;
    demuele ?: boolean;
    material ?: Material;
    medida ?: TresdInterface;
}
