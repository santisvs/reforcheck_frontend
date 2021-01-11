import { Estancia } from "./estancia";

export class Planta {
    public id: string;
    public nombre: string;
    public numero: number;
    public estancias: Array<Estancia>;

    constructor(){
        this.id = "";
        this.nombre = "";
        this.numero = 0;
        this.estancias = [];
    }
    
}
