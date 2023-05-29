import { CreditDebitIndicator } from '././creditDebitIndicator';
/**
* The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
*/
export declare class EndBalance {
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
