import { CalendarType } from '././calendarType';
import { ValidationError } from '././validationError';
export declare class PayrollCalendar {
    /**
    * Name of the Payroll Calendar
    */
    'name'?: string;
    'calendarType'?: CalendarType;
    /**
    * The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD)
    */
    'startDate'?: string;
    /**
    * The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD)
    */
    'paymentDate'?: string;
    /**
    * Xero identifier
    */
    'payrollCalendarID'?: string;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Reference Date (YYYY-MM-DD)
    */
    'referenceDate'?: string;
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
