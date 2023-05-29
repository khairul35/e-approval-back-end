import { PnlAccountType } from '././pnlAccountType';
export declare class PnlAccountClass {
    /**
    * Total revenue/expense value
    */
    'total'?: number;
    /**
    * Contains trading income and other income for revenue section / operating expenses and direct cost for expense section if the data is available for each section. Refer to the account type element below
    */
    'accountTypes'?: Array<PnlAccountType>;
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
