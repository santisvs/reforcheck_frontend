import { TresdInterface } from "./commons/tresd";
import { ElementoInterface } from "./commons/elemento";

export interface RadiadorInterface extends ElementoInterface {
    energia?: string;
    material?: string;
    medida ?: TresdInterface;
    num_elementos ?: number;
}
