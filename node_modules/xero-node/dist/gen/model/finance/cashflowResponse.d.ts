import { CashBalance } from '././cashBalance';
import { CashflowActivity } from '././cashflowActivity';
export declare class CashflowResponse {
    /**
    * Start date of the report
    */
    'startDate'?: string;
    /**
    * End date of the report
    */
    'endDate'?: string;
    'cashBalance'?: CashBalance;
    /**
    * Break down of cash and cash equivalents for the period
    */
    'cashflowActivities'?: Array<CashflowActivity>;
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
