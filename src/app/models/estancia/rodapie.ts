import { UnodInterface } from "./commons/unod";
import { ElementoInterface } from "./commons/elemento";

export interface RodapieInterface extends ElementoInterface {
    tipo ?: string;
    alto ?: UnodInterface;
    largo ?: UnodInterface;
    ancho ?: UnodInterface;
}
