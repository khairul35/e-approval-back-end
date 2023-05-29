import { AccountUsage } from '././accountUsage';
export declare class AccountUsageResponse {
    /**
    * The requested Organisation to which the data pertains
    */
    'organisationId'?: string;
    /**
    * The start month of the report
    */
    'startMonth'?: string;
    /**
    * The end month of the report
    */
    'endMonth'?: string;
    'accountUsage'?: Array<AccountUsage>;
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
