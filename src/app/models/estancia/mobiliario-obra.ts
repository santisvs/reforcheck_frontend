import { Unidad } from "../tipos/unidad.enum";
import { ElementoInterface } from "./commons/elemento";

export interface MobiliarioObraInterface extends ElementoInterface {
    cantidad ?: number;
    unidad ?: Unidad;
    desmontable ?: boolean;
}
