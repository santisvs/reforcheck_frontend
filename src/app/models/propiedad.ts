import { PlantaInterface } from "./planta";

export interface PropiedadInterface {
    id?: String;
    nombre_propietario?: String;
    dni_propietario?: String;
    telf_propietario?: String;
    email_propietario?: String;
    direccion?: String;
    tipo?: String;
    gps?: String;
    fecha_construccion?: Date;
    fecha_ultima_reforma?: Date;
    nombre_reforchecker?:String;
    plantas?: Array<PlantaInterface>;
    
}
