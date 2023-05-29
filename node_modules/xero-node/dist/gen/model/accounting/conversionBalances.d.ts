import { BalanceDetails } from '././balanceDetails';
/**
* Balance supplied for each account that has a value as at the conversion date.
*/
export declare class ConversionBalances {
    /**
    * The account code for a account
    */
    'accountCode'?: string;
    /**
    * The opening balances of the account. Debits are positive, credits are negative values
    */
    'balance'?: number;
    'balanceDetails'?: Array<BalanceDetails>;
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
