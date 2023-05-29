import { CashflowType } from '././cashflowType';
export declare class CashflowActivity {
    /**
    * Name of the cashflow activity type. It will be either Operating Activities, Investing Activities or Financing Activities
    */
    'name'?: string;
    /**
    * Total value of the activity type
    */
    'total'?: number;
    'cashflowTypes'?: Array<CashflowType>;
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
