import { TrackingCategory } from '././trackingCategory';
export declare class ManualJournalLine {
    /**
    * total for line. Debits are positive, credits are negative value
    */
    'lineAmount'?: number;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * See Accounts
    */
    'accountID'?: string;
    /**
    * Description for journal line
    */
    'description'?: string;
    /**
    * The tax type from TaxRates
    */
    'taxType'?: string;
    /**
    * Optional Tracking Category – see Tracking. Any JournalLine can have a maximum of 2 <TrackingCategory> elements.
    */
    'tracking'?: Array<TrackingCategory>;
    /**
    * The calculated tax amount based on the TaxType and LineAmount
    */
    'taxAmount'?: number;
    /**
    * is the line blank
    */
    'isBlank'?: boolean;
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
