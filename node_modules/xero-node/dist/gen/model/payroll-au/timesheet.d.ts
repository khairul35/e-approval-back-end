import { TimesheetLine } from '././timesheetLine';
import { TimesheetStatus } from '././timesheetStatus';
import { ValidationError } from '././validationError';
export declare class Timesheet {
    /**
    * The Xero identifier for an employee
    */
    'employeeID': string;
    /**
    * Period start date (YYYY-MM-DD)
    */
    'startDate': string;
    /**
    * Period end date (YYYY-MM-DD)
    */
    'endDate': string;
    'status'?: TimesheetStatus;
    /**
    * Timesheet total hours
    */
    'hours'?: number;
    /**
    * The Xero identifier for a Payroll Timesheet
    */
    'timesheetID'?: string;
    'timesheetLines'?: Array<TimesheetLine>;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
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
