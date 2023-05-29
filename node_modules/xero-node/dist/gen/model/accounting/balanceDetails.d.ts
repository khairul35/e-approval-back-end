/**
* An array to specify multiple currency balances of an account
*/
export declare class BalanceDetails {
    /**
    * The opening balances of the account. Debits are positive, credits are negative values
    */
    'balance'?: number;
    /**
    * The currency of the balance (Not required for base currency)
    */
    'currencyCode'?: string;
    /**
    * (Optional) Exchange rate to base currency when money is spent or received. If not specified, XE rate for the day is applied
    */
    'currencyRate'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
