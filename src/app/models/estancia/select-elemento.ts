export class SelectElemento {
    public planta: number;
    public estancia: number;
    public mobiliario_obra: boolean;
    public techo : boolean;
    public revestimiento : boolean;
    public solado : boolean;
    public rodapie : boolean;
    public pintura : boolean;
    public instalacion : boolean;
    public iluminacion : boolean;
    public ventanas : number;
    public puertas : number;
    public armarios : number;
    public radiadores : number;
    public climatizacion : number;
    public baneras : number;
    public duchas : number;
    public lavabos : number;
    public inodoros : number;
    public bidets : number;

    constructor(){
        this.planta = 0;
        this.estancia = 0;
        this.mobiliario_obra = false;
        this.techo = false;
        this.revestimiento = false;
        this.solado = false;
        this.rodapie = false;
        this.pintura = false;
        this.instalacion = false;
        this.iluminacion = false;
        this.ventanas = 0;
        this.puertas = 0;
        this.armarios = 0;
        this.radiadores = 0;
        this.climatizacion = 0;
        this.baneras = 0;
        this.duchas = 0;
        this.lavabos = 0;
        this.inodoros = 0;
        this.bidets = 0;
    }

    public isEqual(_elem: SelectElemento){
        if((this.estancia == _elem.estancia) && (this.mobiliario_obra == _elem.mobiliario_obra) &&
            (this.techo == _elem.techo) && (this.revestimiento == _elem.revestimiento) &&
            (this.solado == _elem.solado) && (this.rodapie == _elem.rodapie) &&
            (this.pintura == _elem.pintura) && (this.instalacion == _elem.instalacion) &&
            (this.iluminacion == _elem.iluminacion) && (this.ventanas == _elem.ventanas) &&
            (this.puertas == _elem.puertas) && (this.armarios == _elem.armarios) &&
            (this.radiadores == _elem.radiadores) && (this.climatizacion == _elem.climatizacion) &&
            (this.baneras == _elem.baneras) && (this.duchas == _elem.duchas) &&
            (this.lavabos == _elem.lavabos) && (this.inodoros == _elem.inodoros) &&
            (this.bidets == _elem.bidets) && (this.planta == _elem.planta)){
            return true;
        } else{
            return false;
        }
    }
}
