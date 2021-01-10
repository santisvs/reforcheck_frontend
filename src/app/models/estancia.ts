import { ArmarioInterface } from "./estancia/armario";
import { ClimatizacionInterface } from "./estancia/climatizacion";
import { IluminacionInterface } from "./estancia/iluminacion";
import { InstalacionInterface } from "./estancia/instalacion";
import { MobiliarioObraInterface } from "./estancia/mobiliario-obra";
import { PinturaInterface } from "./estancia/pintura";
import { PuertaInterface } from "./estancia/puerta";
import { RadiadorInterface } from "./estancia/radiador";
import { RevestimientoInterface } from "./estancia/revestimiento";
import { RodapieInterface } from "./estancia/rodapie";
import { SoladoInterface } from "./estancia/solado";
import { TechoInterface } from "./estancia/techo";
import { VentanaInterface } from "./estancia/ventana";
import { TresdInterface } from "./estancia/commons/tresd";

export interface EstanciaInterface {
    id?: String;
    tipo?: String;
    subtipo ?: String;
    medida ?: TresdInterface;
    ventanas ?: Array<VentanaInterface>;
    puertas ?: Array<PuertaInterface>;
    armarios ?: Array<ArmarioInterface>;
    radiadores ?: Array<RadiadorInterface>;
    climatizacion ?: Array<ClimatizacionInterface>;
    mobiliario_obra?: MobiliarioObraInterface;
    techo ?: TechoInterface;
    revestimiento ?: RevestimientoInterface;
    solado ?: SoladoInterface;
    rodapie ?: RodapieInterface;
    pintura ?: PinturaInterface;
    instalacion ?: InstalacionInterface;
    iluminacion ?: IluminacionInterface;
}
