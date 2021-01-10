import { ElementoInterface } from "./commons/elemento";

export interface TechoInterface extends ElementoInterface {
    falso_techo ?: boolean;
    moldura ?: boolean;
    demuele ?: boolean;
}
