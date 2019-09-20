import { Common } from './square-plugin.common';

export class SquarePlugin extends Common {
    public squareReader: any;
    public money: any;
    public connection: any;
    protected _SCCMoney: SCCMoney;

    constructor(){
        super();
    }

    chargeCustomer(amount: number, note: string = "", clientId: string = "", urlScheme: string = "", currencyCode = "USD"): boolean {
        let cents = amount*100;
        let request = com.squareup.sdk.pos.ChargeRequest();
        console.log('here');
        console.log(request);
        return success;
    }

    decodeResponse = function (url: string) {
        const response = SCCAPIResponse.responseWithResponseURLError(responseURL);

        return {
          errorMessage: response.error.localizedDescription,
          successResponse: response.successResponse,
          transactionID: response.transactionID,
          clientTransactionID: response.clientTransactionID,
          userInfoString: response.userInfoString,
        };
    };
}
