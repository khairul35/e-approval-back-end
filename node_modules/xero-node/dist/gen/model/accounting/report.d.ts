import { TenNinetyNineContact } from '././tenNinetyNineContact';
export declare class Report {
    /**
    * See Prepayment Types
    */
    'reportName'?: string;
    /**
    * See Prepayment Types
    */
    'reportType'?: Report.ReportTypeEnum;
    /**
    * See Prepayment Types
    */
    'reportTitle'?: string;
    /**
    * Date of report
    */
    'reportDate'?: string;
    /**
    * Updated Date
    */
    'updatedDateUTC'?: Date;
    'contacts'?: Array<TenNinetyNineContact>;
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
export declare namespace Report {
    enum ReportTypeEnum {
        AgedPayablesByContact
    }
}
