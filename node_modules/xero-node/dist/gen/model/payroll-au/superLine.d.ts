import { SuperannuationCalculationType } from '././superannuationCalculationType';
import { SuperannuationContributionType } from '././superannuationContributionType';
export declare class SuperLine {
    /**
    * Xero super membership ID
    */
    'superMembershipID'?: string;
    'contributionType'?: SuperannuationContributionType;
    'calculationType'?: SuperannuationCalculationType;
    /**
    * amount of minimum earnings
    */
    'minimumMonthlyEarnings'?: number;
    /**
    * expense account code
    */
    'expenseAccountCode'?: string;
    /**
    * liabilty account code
    */
    'liabilityAccountCode'?: string;
    /**
    * percentage for super line
    */
    'percentage'?: number;
    /**
    * Super membership amount
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
