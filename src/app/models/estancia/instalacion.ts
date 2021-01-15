import { Dosd } from "./commons/dosd";
import { Elemento } from "./commons/elemento";

export class Instalacion extends Elemento {
    public medida : Dosd;
    public caja_registro : number;
    public interruptores_conmutados : number;
    public interruptores_no_conmutados : number;
    public enchufes : number;
    public toma_tv : number;
    public toma_telef : number;
    public toma_datos : number;

    constructor(){
        super();
        this.medida = new Dosd();
        this.caja_registro = 0;
        this.interruptores_conmutados = 0;
        this.interruptores_no_conmutados = 0;
        this.enchufes = 0;
        this.toma_tv = 0;
        this.toma_telef = 0;
        this.toma_datos = 0;
    }
}
