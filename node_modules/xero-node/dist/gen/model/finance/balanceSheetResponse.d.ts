import { BalanceSheetAccountGroup } from '././balanceSheetAccountGroup';
export declare class BalanceSheetResponse {
    /**
    * Balance date of the report
    */
    'balanceDate'?: string;
    'asset'?: BalanceSheetAccountGroup;
    'liability'?: BalanceSheetAccountGroup;
    'equity'?: BalanceSheetAccountGroup;
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
