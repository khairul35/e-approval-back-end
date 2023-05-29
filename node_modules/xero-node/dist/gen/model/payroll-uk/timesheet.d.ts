import { TimesheetLine } from '././timesheetLine';
export declare class Timesheet {
    /**
    * The Xero identifier for a Timesheet
    */
    'timesheetID'?: string;
    /**
    * The Xero identifier for the Payroll Calendar that the Timesheet applies to
    */
    'payrollCalendarID': string;
    /**
    * The Xero identifier for the Employee that the Timesheet is for
    */
    'employeeID': string;
    /**
    * The Start Date of the Timesheet period (YYYY-MM-DD)
    */
    'startDate': string;
    /**
    * The End Date of the Timesheet period (YYYY-MM-DD)
    */
    'endDate': string;
    /**
    * Status of the timesheet
    */
    'status'?: Timesheet.StatusEnum;
    /**
    * The Total Hours of the Timesheet
    */
    'totalHours'?: number;
    /**
    * The UTC date time that the Timesheet was last updated
    */
    'updatedDateUTC'?: Date;
    'timesheetLines'?: Array<TimesheetLine>;
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
export declare namespace Timesheet {
    enum StatusEnum {
        Draft,
        Approved,
        Completed
    }
}
