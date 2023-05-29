import { SuperannuationCalculationType } from '././superannuationCalculationType';
import { SuperannuationContributionType } from '././superannuationContributionType';
export declare class SuperannuationLine {
    /**
    * Xero identifier for payroll super fund membership ID.
    */
    'superMembershipID'?: string;
    'contributionType'?: SuperannuationContributionType;
    'calculationType'?: SuperannuationCalculationType;
    /**
    * Superannuation minimum monthly earnings.
    */
    'minimumMonthlyEarnings'?: number;
    /**
    * Superannuation expense account code.
    */
    'expenseAccountCode'?: string;
    /**
    * Superannuation liability account code
    */
    'liabilityAccountCode'?: string;
    /**
    * Superannuation payment date for the current period (YYYY-MM-DD)
    */
    'paymentDateForThisPeriod'?: string;
    /**
    * Superannuation percentage
    */
    'percentage'?: number;
    /**
    * Superannuation amount
    */
    'amount'?: number;
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
