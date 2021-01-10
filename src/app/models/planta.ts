import { EstanciaInterface } from "./estancia";

export interface PlantaInterface {
    id?: string;
    nombre?: string;
    numero?: string;
    estancias?: Array<EstanciaInterface>;
    
}
