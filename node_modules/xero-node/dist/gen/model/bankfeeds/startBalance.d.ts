import { CreditDebitIndicator } from '././creditDebitIndicator';
/**
* The starting balance of the statement
*/
export declare class StartBalance {
    /**
    * decimal(19,4) unsigned Opening/closing balance amount.
    */
    'amount'?: number;
    'creditDebitIndicator'?: CreditDebitIndicator;
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
