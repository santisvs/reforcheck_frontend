import { UnodInterface } from "./commons/unod";
import { ElementoInterface } from "./commons/elemento";

export interface IluminacionInterface extends ElementoInterface {
    empotrada ?: boolean;
    focos ?: number;
    down_lights ?: number;
    tiras_led ?: Array<UnodInterface>;
}
