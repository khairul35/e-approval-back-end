import { EmploymentBasis } from '././employmentBasis';
import { ResidencyStatus } from '././residencyStatus';
import { SeniorMaritalStatus } from '././seniorMaritalStatus';
import { TFNExemptionType } from '././tFNExemptionType';
import { TaxScaleType } from '././taxScaleType';
import { WorkCondition } from '././workCondition';
export declare class TaxDeclaration {
    /**
    * Address line 1 for employee home address
    */
    'employeeID'?: string;
    'employmentBasis'?: EmploymentBasis;
    'tFNExemptionType'?: TFNExemptionType;
    /**
    * The tax file number e.g 123123123.
    */
    'taxFileNumber'?: string;
    /**
    * 11-digit Australian Business Number e.g 21006819692 or an empty string (\"\") to unset a previously set value. Only applicable, and mandatory if income type is NONEMPLOYEE.
    */
    'aBN'?: string;
    /**
    * If the employee is Australian resident for tax purposes. e.g true or false
    */
    'australianResidentForTaxPurposes'?: boolean;
    'residencyStatus'?: ResidencyStatus;
    'taxScaleType'?: TaxScaleType;
    'workCondition'?: WorkCondition;
    'seniorMaritalStatus'?: SeniorMaritalStatus;
    /**
    * If tax free threshold claimed. e.g true or false
    */
    'taxFreeThresholdClaimed'?: boolean;
    /**
    * If has tax offset estimated then the tax offset estimated amount. e.g 100
    */
    'taxOffsetEstimatedAmount'?: number;
    /**
    * If employee has HECS or HELP debt. e.g true or false
    */
    'hasHELPDebt'?: boolean;
    /**
    * If employee has financial supplement debt. e.g true or false
    */
    'hasSFSSDebt'?: boolean;
    /**
    * If employee has trade support loan. e.g true or false
    */
    'hasTradeSupportLoanDebt'?: boolean;
    /**
    * If the employee has requested that additional tax be withheld each pay run. e.g 50
    */
    'upwardVariationTaxWithholdingAmount'?: number;
    /**
    * If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false
    */
    'eligibleToReceiveLeaveLoading'?: boolean;
    /**
    * If the employee has approved withholding variation. e.g (0 - 100)
    */
    'approvedWithholdingVariationPercentage'?: number;
    /**
    * If the employee is eligible for student startup loan rules
    */
    'hasStudentStartupLoan'?: boolean;
    /**
    * If the employee has any of the following loans or debts: Higher Education Loan Program (HELP/HECS), VET Student Loan (VSL), Financial Supplement (FS), Student Start-up Loan (SSL), or Trade Support Loan (TSL)
    */
    'hasLoanOrStudentDebt'?: boolean;
    /**
    * Last modified timestamp
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
