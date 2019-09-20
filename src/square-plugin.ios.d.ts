import { Common } from './square-plugin.common';
export declare class SCCAPIRequest {
    static setClientID(clientID: string): any;
    static requestWithCallbackURLAmountUserInfoStringMerchantIDNotesCustomerIDSupportedTenderTypesClearsDefaultFeesReturnAutomaticallyAfterPaymentError(callbackURL: NSURL, amount: SCCMoney, userInfoString: string, merchantID: string, notes: string, customerID: string, supportedTenderTypes: SCCAPIRequestTenderTypes, clearsDefaultFees: boolean, autoreturn: boolean): SCCAPIRequest;
}
export declare class SCCAPIResponse {
    static responseWithResponseURLError(responseURL: NSURL, error?: NSError): SCCAPIResponse;
    static userInfoString: string;
    static error: NSError;
    static successResponse: boolean;
    static transactionID: string;
    static clientTransactionID: string;
}
export declare class SCCMoney {
    static moneyWithAmountCentsCurrencyCodeError(amountCents: number, currencyCode: string): any;
}
export declare const enum SCCAPIRequestTenderTypes {
    All = 18446744073709552000,
    Card = 1,
    Cash = 2,
    Other = 4,
    SquareGiftCard = 8,
    CardOnFile = 16,
}
export declare class SCCAPIConnection {
    static performRequestError(request: SCCAPIRequest): boolean;
}
export declare class SquarePlugin extends Common {
    squareReader: any;
    money: any;
    connection: any;
    protected _SCCMoney: SCCMoney;
    constructor();
    chargeCustomer(amount: number, note?: string, clientId?: string, urlScheme?: string, currencyCode?: string): boolean;
    decodeResponse(url: string): array;
}
