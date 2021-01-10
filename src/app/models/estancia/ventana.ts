import { DosdInterface } from "./commons/dosd";
import { ElementoInterface } from "./commons/elemento";

export interface VentanaInterface extends ElementoInterface{
    medida ?: DosdInterface;
    persiana ?: boolean;
    capialzado ?: boolean;
}
