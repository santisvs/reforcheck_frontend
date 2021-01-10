import { DosdInterface } from "./commons/dosd";
import { ElementoInterface } from "./commons/elemento";

export interface SoladoInterface extends ElementoInterface {
    tipo?: string;
    medida?: DosdInterface;
}
