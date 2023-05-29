import { LockHistoryModel } from '././lockHistoryModel';
export declare class LockHistoryResponse {
    /**
    * The requested Organisation to which the data pertains
    */
    'organisationId'?: string;
    /**
    * The end date of the report
    */
    'endDate'?: string;
    'lockDates'?: Array<LockHistoryModel>;
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
