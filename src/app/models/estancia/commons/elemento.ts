import { FabricanteInterface } from "./fabricante";
import { InfoInterface } from "./info";

export interface ElementoInterface {
    info ?: InfoInterface;
    fabricante ?: FabricanteInterface;
}
