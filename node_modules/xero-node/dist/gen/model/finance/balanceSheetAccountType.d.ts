import { BalanceSheetAccountDetail } from '././balanceSheetAccountDetail';
export declare class BalanceSheetAccountType {
    /**
    * The type of the account. See <a href=\'https://developer.xero.com/documentation/api/types#AccountTypes\'>Account Types</a>
    */
    'accountType'?: string;
    /**
    * A list of all accounts of this type. Refer to the Account section below for each account element detail.
    */
    'accounts'?: Array<BalanceSheetAccountDetail>;
    /**
    * Total value of all the accounts in this type
    */
    'total'?: number;
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
