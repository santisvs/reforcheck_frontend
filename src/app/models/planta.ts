import { EstanciaInterface } from "./estancia";
import { EstanciaHumedaInterface } from "./estancia-humeda";

export interface PlantaInterface {
    id?: string;
    nombre?: string;
    numero?: number;
    estancias?: Array<EstanciaHumedaInterface>;
    
}
