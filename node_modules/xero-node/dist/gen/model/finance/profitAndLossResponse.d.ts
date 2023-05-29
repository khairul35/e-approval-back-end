import { PnlAccountClass } from '././pnlAccountClass';
export declare class ProfitAndLossResponse {
    /**
    * Start date of the report
    */
    'startDate'?: string;
    /**
    * End date of the report
    */
    'endDate'?: string;
    /**
    * Net profit loss value
    */
    'netProfitLoss'?: number;
    'revenue'?: PnlAccountClass;
    'expense'?: PnlAccountClass;
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
