import { ReportHistoryModel } from '././reportHistoryModel';
export declare class ReportHistoryResponse {
    /**
    * The requested Organisation to which the data pertains
    */
    'organisationId'?: string;
    /**
    * The end date of the report
    */
    'endDate'?: string;
    'reports'?: Array<ReportHistoryModel>;
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
