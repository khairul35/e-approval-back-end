import { LeavePeriod } from '././leavePeriod';
export declare class EmployeeLeave {
    /**
    * The Xero identifier for LeaveType
    */
    'leaveID'?: string;
    /**
    * The Xero identifier for LeaveType
    */
    'leaveTypeID': string;
    /**
    * The description of the leave  (max length = 50)
    */
    'description': string;
    /**
    * Start date of the leave (YYYY-MM-DD)
    */
    'startDate': string;
    /**
    * End date of the leave (YYYY-MM-DD)
    */
    'endDate': string;
    /**
    * The leave period information. The StartDate, EndDate and NumberOfUnits needs to be specified when you do not want to calculate NumberOfUnits automatically. Using incorrect period StartDate and EndDate will result in automatic computation of the NumberOfUnits.
    */
    'periods'?: Array<LeavePeriod>;
    /**
    * UTC timestamp of last update to the leave type note
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
