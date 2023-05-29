import { Payslip } from '././payslip';
export declare class PayRun {
    /**
    * Xero unique identifier for the pay run
    */
    'payRunID'?: string;
    /**
    * Xero unique identifier for the payroll calendar
    */
    'payrollCalendarID'?: string;
    /**
    * Period start date of the payroll calendar
    */
    'periodStartDate'?: string;
    /**
    * Period end date of the payroll calendar
    */
    'periodEndDate'?: string;
    /**
    * Payment date of the pay run
    */
    'paymentDate'?: string;
    /**
    * Total cost of the pay run
    */
    'totalCost'?: number;
    /**
    * Total pay of the pay run
    */
    'totalPay'?: number;
    /**
    * Pay run status
    */
    'payRunStatus'?: PayRun.PayRunStatusEnum;
    /**
    * Pay run type
    */
    'payRunType'?: PayRun.PayRunTypeEnum;
    /**
    * Calendar type of the pay run
    */
    'calendarType'?: PayRun.CalendarTypeEnum;
    /**
    * Posted date time of the pay run
    */
    'postedDateTime'?: string;
    'paySlips'?: Array<Payslip>;
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
export declare namespace PayRun {
    enum PayRunStatusEnum {
        Draft,
        Posted
    }
    enum PayRunTypeEnum {
        Scheduled,
        Unscheduled,
        EarlierYearUpdate
    }
    enum CalendarTypeEnum {
        Weekly,
        Fortnightly,
        FourWeekly,
        Monthly,
        Annual,
        Quarterly
    }
}
