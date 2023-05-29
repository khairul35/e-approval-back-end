import { UsageRecord } from '././usageRecord';
/**
* Response to get usage record
*/
export declare class UsageRecordsList {
    /**
    * A collection of usage records
    */
    'usageRecords': Array<UsageRecord>;
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
