import { ContactDetail } from '././contactDetail';
import { ManualJournalTotal } from '././manualJournalTotal';
import { TotalDetail } from '././totalDetail';
import { TotalOther } from '././totalOther';
export declare class IncomeByContactResponse {
    /**
    * Start date of the report
    */
    'startDate'?: string;
    /**
    * End date of the report
    */
    'endDate'?: string;
    /**
    * Total value
    */
    'total'?: number;
    'totalDetail'?: TotalDetail;
    'totalOther'?: TotalOther;
    'contacts'?: Array<ContactDetail>;
    'manualJournals'?: ManualJournalTotal;
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
