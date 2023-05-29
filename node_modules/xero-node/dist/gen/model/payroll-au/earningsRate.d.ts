import { AllowanceCategory } from '././allowanceCategory';
import { AllowanceType } from '././allowanceType';
import { EarningsType } from '././earningsType';
import { EmploymentTerminationPaymentType } from '././employmentTerminationPaymentType';
import { RateType } from '././rateType';
export declare class EarningsRate {
    /**
    * Name of the earnings rate (max length = 100)
    */
    'name'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT
    */
    'typeOfUnits'?: string;
    /**
    * Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding
    */
    'isExemptFromTax'?: boolean;
    /**
    * See the ATO website for details of which payments are exempt from SGC
    */
    'isExemptFromSuper'?: boolean;
    /**
    * Boolean to determine if the earnings rate is reportable or exempt from W1
    */
    'isReportableAsW1'?: boolean;
    /**
    * Boolean to determine if the allowance earnings rate contributes towards annual leave rate. Only applicable if EarningsType is ALLOWANCE and RateType is RATEPERUNIT
    */
    'allowanceContributesToAnnualLeaveRate'?: boolean;
    /**
    * Boolean to determine if the allowance earnings rate contributes towards overtime allowance rate. Only applicable if EarningsType is ALLOWANCE and RateType is RATEPERUNIT
    */
    'allowanceContributesToOvertimeRate'?: boolean;
    'earningsType'?: EarningsType;
    /**
    * Xero identifier
    */
    'earningsRateID'?: string;
    'rateType'?: RateType;
    /**
    * Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT.
    */
    'ratePerUnit'?: string;
    /**
    * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE
    */
    'multiplier'?: number;
    /**
    * Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE
    */
    'accrueLeave'?: boolean;
    /**
    * Optional Amount for FIXEDAMOUNT RateType EarningsRate
    */
    'amount'?: number;
    'employmentTerminationPaymentType'?: EmploymentTerminationPaymentType;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Is the current record
    */
    'currentRecord'?: boolean;
    'allowanceType'?: AllowanceType;
    'allowanceCategory'?: AllowanceCategory;
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
