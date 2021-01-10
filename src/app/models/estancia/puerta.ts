import { TresdInterface } from "./commons/tresd";
import { ElementoInterface } from "./commons/elemento";
import { FabricanteInterface } from "./commons/fabricante";
import { InfoInterface } from "./commons/info";

export interface PuertaInterface extends ElementoInterface {
    medida ?: TresdInterface;
    estandar ?: boolean;
    espesor_tabique ?: number;
    mano ?: boolean; // Izquierda true, Derecha false;
}
