import { LeaveCategoryCode } from '././leaveCategoryCode';
export declare class LeaveType {
    /**
    * Name of the earnings rate (max length = 100)
    */
    'name'?: string;
    /**
    * The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate
    */
    'typeOfUnits'?: string;
    /**
    * Xero identifier
    */
    'leaveTypeID'?: string;
    /**
    * The number of units the employee is entitled to each year
    */
    'normalEntitlement'?: number;
    /**
    * Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)
    */
    'leaveLoadingRate'?: number;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Set this to indicate that an employee will be paid when taking this type of leave
    */
    'isPaidLeave'?: boolean;
    /**
    * Set this if you want a balance for this leave type to be shown on your employee’s payslips
    */
    'showOnPayslip'?: boolean;
    /**
    * Is the current record
    */
    'currentRecord'?: boolean;
    'leaveCategoryCode'?: LeaveCategoryCode;
    /**
    * Set this to indicate that the leave type is exempt from superannuation guarantee contribution
    */
    'sGCExempt'?: boolean;
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
