import { EmploymentTerminationPaymentType } from '././employmentTerminationPaymentType';
import { EntitlementFinalPayPayoutType } from '././entitlementFinalPayPayoutType';
import { LeaveLineCalculationType } from '././leaveLineCalculationType';
export declare class LeaveLine {
    /**
    * Xero leave type identifier
    */
    'leaveTypeID'?: string;
    'calculationType'?: LeaveLineCalculationType;
    'entitlementFinalPayPayoutType'?: EntitlementFinalPayPayoutType;
    'employmentTerminationPaymentType'?: EmploymentTerminationPaymentType;
    /**
    * amount of leave line
    */
    'includeSuperannuationGuaranteeContribution'?: boolean;
    /**
    * Number of units for leave line.
    */
    'numberOfUnits'?: number;
    /**
    * Hours of leave accrued each year
    */
    'annualNumberOfUnits'?: number;
    /**
    * Normal ordinary earnings number of units for leave line.
    */
    'fullTimeNumberOfUnitsPerPeriod'?: number;
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
