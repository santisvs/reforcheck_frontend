import { DosdInterface } from "./commons/dosd";
import { ElementoInterface } from "./commons/elemento";

export interface RevestimientoInterface extends ElementoInterface {
    medida ?: DosdInterface;
    ceramico?: boolean;
    friso ?: boolean;
    panelado ?: boolean;
    moldura ?: boolean;
    demuele ?: boolean;
}
