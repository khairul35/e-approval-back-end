export declare class PayRunCalendar {
    /**
    * Xero unique identifier for the payroll calendar
    */
    'payrollCalendarID'?: string;
    /**
    * Name of the calendar
    */
    'name': string;
    /**
    * Type of the calendar
    */
    'calendarType': PayRunCalendar.CalendarTypeEnum;
    /**
    * Period start date of the calendar
    */
    'periodStartDate': string;
    /**
    * Period end date of the calendar
    */
    'periodEndDate'?: string;
    /**
    * Payment date of the calendar
    */
    'paymentDate': string;
    /**
    * UTC timestamp of the last update to the pay run calendar
    */
    'updatedDateUTC'?: Date;
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
export declare namespace PayRunCalendar {
    enum CalendarTypeEnum {
        Weekly,
        Fortnightly,
        FourWeekly,
        Monthly,
        Annual,
        Quarterly
    }
}
