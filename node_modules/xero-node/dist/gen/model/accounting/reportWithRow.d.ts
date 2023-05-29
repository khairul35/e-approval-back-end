import { ReportFields } from '././reportFields';
import { ReportRows } from '././reportRows';
export declare class ReportWithRow {
    /**
    * ID of the Report
    */
    'reportID'?: string;
    /**
    * Name of the report
    */
    'reportName'?: string;
    /**
    * Title of the report
    */
    'reportTitle'?: string;
    /**
    * The type of report (BalanceSheet,ProfitLoss, etc)
    */
    'reportType'?: string;
    /**
    * Report titles array (3 to 4 strings with the report name, orgnisation name and time frame of report)
    */
    'reportTitles'?: Array<string>;
    /**
    * Date of report
    */
    'reportDate'?: string;
    'rows'?: Array<ReportRows>;
    /**
    * Updated Date
    */
    'updatedDateUTC'?: Date;
    'fields'?: Array<ReportFields>;
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
