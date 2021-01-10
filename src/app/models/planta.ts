import { EstanciaInterface } from "./estancia";

export interface PlantaInterface {
    id?: String;
    nombre?: String;
    estancias?: Array<EstanciaInterface>;
    
}
