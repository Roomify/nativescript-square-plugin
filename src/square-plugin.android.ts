import { Common } from './square-plugin.common';

import globalAndroid = android;

declare const com: any, squareup: any, sdk: any, pos: any;

const app = require('application');

export class SquarePlugin extends Common {
    public squareReader: any;
    public money: any;
    public connection: any;

    private CHARGE_REQUEST_CODE = 1;

    constructor() {
        super();

        app.android.on('activityResult', (requestCode: number, resultCode: number, data: android.content.Intent) => {
          console.log('activity result');

          if (data == null || requestCode != this.CHARGE_REQUEST_CODE) {
            console.log('Square Point of Sale was uninstalled or stopped working');
            console.dir(requestCode);
            return;
          }
        });
    }

    chargeCustomer(amount: number, note: string = "", clientId: string = "", urlScheme: string = "", currencyCode = "USD"): boolean {

        let cents = amount*100;
        // FIXME make currency code dynamic.
        const request: com.squareup.sdk.pos.ChargeRequest.Builder = new com.squareup.sdk.pos.ChargeRequest.Builder(cents, com.squareup.sdk.pos.CurrencyCode.USD).build();

        let activity = app.android.foregroundActivity || app.android.startActivity;
        const posClient = new com.squareup.sdk.pos.PosSdk.createClient(activity, clientId);

        try {
          const intent = posClient.createChargeIntent(request);
          activity.startActivityForResult(intent, this.CHARGE_REQUEST_CODE);
        } catch(e) {
          console.log(e);
        }

        // FIXME return success status.
        return true;
    }

    decodeResponse = function (url: string) {
        const success = {};

        /*
        return {
          errorMessage: response.error.localizedDescription,
          successResponse: response.successResponse,
          transactionID: response.transactionID,
          clientTransactionID: response.clientTransactionID,
          userInfoString: response.userInfoString,
        };
        */

       return {};
    };
}
