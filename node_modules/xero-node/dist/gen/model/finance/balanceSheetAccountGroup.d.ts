import { BalanceSheetAccountType } from '././balanceSheetAccountType';
export declare class BalanceSheetAccountGroup {
    'accountTypes'?: Array<BalanceSheetAccountType>;
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
