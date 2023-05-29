export declare class Schedule {
    /**
    * Integer used with the unit e.g. 1 (every 1 week), 2 (every 2 months)
    */
    'period'?: number;
    /**
    * One of the following - WEEKLY or MONTHLY
    */
    'unit'?: Schedule.UnitEnum;
    /**
    * Integer used with due date type e.g 20 (of following month), 31 (of current month)
    */
    'dueDate'?: number;
    /**
    * the payment terms
    */
    'dueDateType'?: Schedule.DueDateTypeEnum;
    /**
    * Date the first invoice of the current version of the repeating schedule was generated (changes when repeating invoice is edited)
    */
    'startDate'?: string;
    /**
    * The calendar date of the next invoice in the schedule to be generated
    */
    'nextScheduledDate'?: string;
    /**
    * Invoice end date – only returned if the template has an end date set
    */
    'endDate'?: string;
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
export declare namespace Schedule {
    enum UnitEnum {
        WEEKLY,
        MONTHLY
    }
    enum DueDateTypeEnum {
        DAYSAFTERBILLDATE,
        DAYSAFTERBILLMONTH,
        DAYSAFTERINVOICEDATE,
        DAYSAFTERINVOICEMONTH,
        OFCURRENTMONTH,
        OFFOLLOWINGMONTH
    }
}
