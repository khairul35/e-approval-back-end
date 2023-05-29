export declare class LeavePeriod {
    /**
    * The Pay Period Start Date (YYYY-MM-DD)
    */
    'periodStartDate'?: string;
    /**
    * The Pay Period End Date (YYYY-MM-DD)
    */
    'periodEndDate'?: string;
    /**
    * The Number of Units for the leave
    */
    'numberOfUnits'?: number;
    /**
    * Period Status
    */
    'periodStatus'?: LeavePeriod.PeriodStatusEnum;
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
export declare namespace LeavePeriod {
    enum PeriodStatusEnum {
        Approved,
        Completed
    }
}
