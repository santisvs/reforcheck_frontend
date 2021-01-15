import { Planta } from "./planta";

export class Propiedad {
    public id: string;
    public nombre_propietario: string;
    public dni_propietario: string;
    public telf_propietario: string;
    public email_propietario: string;
    public direccion: string;
    public tipo: string;
    public gps: string;
    public fecha_construccion: Date;
    public fecha_ultima_reforma: Date;
    public nombre_reforchecker:string;
    public plantas: Array<Planta>;

    constructor(){
        this.id = "";
        this.nombre_propietario = "";
        this.dni_propietario = "";
        this.telf_propietario = "";
        this.email_propietario = "";
        this.direccion = "";
        this.tipo = "";
        this.gps = "";
        this.fecha_construccion = new Date();
        this.fecha_ultima_reforma = new Date();
        this.nombre_reforchecker = "";
        this.plantas = [];
    }
    
}
