import { LeavePeriodStatus } from '././leavePeriodStatus';
export declare class LeavePeriod {
    /**
    * The Number of Units for the leave
    */
    'numberOfUnits'?: number;
    /**
    * The Pay Period End Date (YYYY-MM-DD)
    */
    'payPeriodEndDate'?: string;
    /**
    * The Pay Period Start Date (YYYY-MM-DD)
    */
    'payPeriodStartDate'?: string;
    'leavePeriodStatus'?: LeavePeriodStatus;
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
