import { DosdInterface } from "./commons/dosd";
import { ElementoInterface } from "./commons/elemento";

export interface InstalacionInterface extends ElementoInterface {
    medida ?: DosdInterface;
    caja_registro ?: number;
    interruptores_conmutados ?: number;
    interruptores_no_conmutados ?: number;
    enchufes ?: number;
    toma_tv ?: number;
    toma_telef ?: number;
    toma_datos ?: number;
}
