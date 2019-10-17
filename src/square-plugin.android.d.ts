import { Common } from './square-plugin.common';
export declare class SquarePlugin extends Common {
    squareReader: any;
    money: any;
    connection: any;
    private CHARGE_REQUEST_CODE;
    constructor();
    chargeCustomer(amount: number, note?: string, clientId?: string, urlScheme?: string, currencyCode?: string): boolean;
    decodeResponse: (url: string) => {};
}
