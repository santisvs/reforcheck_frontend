import { EstanciaInterface } from "./estancia";
import { BaneraInterface } from "./estancia/banera";
import { BidetInterface } from "./estancia/bidet";
import { DuchaInterface } from "./estancia/ducha";
import { InodoroInterface } from "./estancia/inodoro";
import { LavaboInterface } from "./estancia/lavabo";

export interface EstanciaHumedaInterface extends EstanciaInterface{
    bañeras ?: Array<BaneraInterface>;
    duchas ?: Array<DuchaInterface>;
    lavabos ?: Array<LavaboInterface>;
    inodoros ?: Array<InodoroInterface>;
    bidets ?: Array<BidetInterface>;
}
