import { TresdInterface } from "./commons/tresd";
import { ElementoInterface } from "./commons/elemento";

export interface ArmarioInterface extends ElementoInterface {
    medida ?: TresdInterface;
}
