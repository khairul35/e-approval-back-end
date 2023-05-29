import { CashflowAccount } from '././cashflowAccount';
export declare class CashflowType {
    /**
    * Name of the activity
    */
    'name'?: string;
    /**
    * Total value of the activity
    */
    'total'?: number;
    /**
    * List of the accounts in this activity
    */
    'accounts'?: Array<CashflowAccount>;
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
