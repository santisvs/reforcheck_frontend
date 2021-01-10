import { ElementoInterface } from "./commons/elemento";

export interface ClimatizacionInterface extends ElementoInterface {
    bomba_calor ?: boolean;
    red_conductos ?: boolean;
    ventilador ?: boolean;
}
