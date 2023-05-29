export declare class ReportHistoryModel {
    /**
    * Report code or report title
    */
    'reportName'?: string;
    /**
    * The date or date range of the report
    */
    'reportDateText'?: string;
    /**
    * The system date time that the report was published
    */
    'publishedDateUtc'?: Date;
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
