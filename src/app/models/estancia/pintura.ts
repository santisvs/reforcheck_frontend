import { Cantidad } from "../tipos/cantidad.enum";
import { ElementoInterface } from "./commons/elemento";

export interface PinturaInterface extends ElementoInterface {
    fisuracion ?: Cantidad;
    papel_pintado ?: boolean;
    gotelet ?: boolean;
    raspado ?: boolean;
    color ?: string;
    acabado ?: string;
}
