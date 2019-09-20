import { Observable } from 'tns-core-modules/data/observable';
export declare class Common extends Observable {
    message: string;
    squareReader: any;
    constructor();
    greet(): string;
    chargeCustomer(amount: number, note?: string, clientId?: string, urlScheme?: string, currencyCode?: string): boolean;
    getVersion(): number;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
