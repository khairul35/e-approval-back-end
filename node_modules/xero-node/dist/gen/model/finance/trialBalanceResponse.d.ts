import { TrialBalanceAccount } from '././trialBalanceAccount';
export declare class TrialBalanceResponse {
    /**
    * Start date of the report
    */
    'startDate'?: string;
    /**
    * End date of the report
    */
    'endDate'?: string;
    /**
    * Refer to the accounts section below
    */
    'accounts'?: Array<TrialBalanceAccount>;
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
