import { LeavePeriod } from '././leavePeriod';
import { PayOutType } from '././payOutType';
import { ValidationError } from '././validationError';
export declare class LeaveApplication {
    /**
    * The Xero identifier for Payroll Employee
    */
    'leaveApplicationID'?: string;
    /**
    * The Xero identifier for Payroll Employee
    */
    'employeeID'?: string;
    /**
    * The Xero identifier for Leave Type
    */
    'leaveTypeID'?: string;
    /**
    * The title of the leave
    */
    'title'?: string;
    /**
    * Start date of the leave (YYYY-MM-DD)
    */
    'startDate'?: string;
    /**
    * End date of the leave (YYYY-MM-DD)
    */
    'endDate'?: string;
    /**
    * The Description of the Leave
    */
    'description'?: string;
    'payOutType'?: PayOutType;
    'leavePeriods'?: Array<LeavePeriod>;
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
