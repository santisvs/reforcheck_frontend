import { Armario } from "./estancia/armario";
import { Climatizacion } from "./estancia/climatizacion";
import { Iluminacion } from "./estancia/iluminacion";
import { Instalacion } from "./estancia/instalacion";
import { MobiliarioObra } from "./estancia/mobiliario-obra";
import { Pintura } from "./estancia/pintura";
import { Puerta } from "./estancia/puerta";
import { Radiador } from "./estancia/radiador";
import { Revestimiento } from "./estancia/revestimiento";
import { Rodapie } from "./estancia/rodapie";
import { Solado } from "./estancia/solado";
import { Techo } from "./estancia/techo";
import { Ventana } from "./estancia/ventana";
import { Tresd } from "./estancia/commons/tresd";
import { Banera } from "./estancia/banera";
import { Ducha } from "./estancia/ducha";
import { Lavabo } from "./estancia/lavabo";
import { Inodoro } from "./estancia/inodoro";
import { Bidet } from "./estancia/bidet";

export class Estancia {
    public id: string;
    public numero: number;
    public nombre: string;
    public tipo: string;
    public subtipo : string;
    public medida : Tresd;
    public ventanas : Array<Ventana>;
    public puertas : Array<Puerta>;
    public armarios : Array<Armario>;
    public radiadores : Array<Radiador>;
    public climatizacion : Array<Climatizacion>;
    public mobiliario_obra: MobiliarioObra;
    public techo : Techo;
    public revestimiento : Revestimiento;
    public solado : Solado;
    public rodapie : Rodapie;
    public pintura : Pintura;
    public instalacion : Instalacion;
    public iluminacion : Iluminacion;
    // Humeda
    public bañeras : Array<Banera>;
    public duchas : Array<Ducha>;
    public lavabos : Array<Lavabo>;
    public inodoros : Array<Inodoro>;
    public bidets : Array<Bidet>;

    constructor(){
        this.id = "";
        this.numero = 0;
        this.nombre = "";
        this.tipo = "";
        this.subtipo =  "";
        this.medida = new Tresd();
        this.ventanas = [];
        this.puertas = [];
        this.armarios = [];
        this.radiadores = [];
        this.climatizacion = [];
        this.mobiliario_obra = new MobiliarioObra();
        this.techo = new Techo();
        this.revestimiento = new Revestimiento();
        this.solado = new Solado();
        this.rodapie = new Rodapie();
        this.pintura = new Pintura();
        this.instalacion = new Instalacion();
        this.iluminacion = new Iluminacion();
        this.bañeras = [];
        this.duchas = [];
        this.lavabos = [];
        this.inodoros = [];
        this.bidets = [];
    }
}
