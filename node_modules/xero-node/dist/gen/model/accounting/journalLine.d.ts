import { AccountType } from '././accountType';
import { TrackingCategory } from '././trackingCategory';
export declare class JournalLine {
    /**
    * Xero identifier for Journal
    */
    'journalLineID'?: string;
    /**
    * See Accounts
    */
    'accountID'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    'accountType'?: AccountType;
    /**
    * See AccountCodes
    */
    'accountName'?: string;
    /**
    * The description from the source transaction line item. Only returned if populated.
    */
    'description'?: string;
    /**
    * Net amount of journal line. This will be a positive value for a debit and negative for a credit
    */
    'netAmount'?: number;
    /**
    * Gross amount of journal line (NetAmount + TaxAmount).
    */
    'grossAmount'?: number;
    /**
    * Total tax on a journal line
    */
    'taxAmount'?: number;
    /**
    * The tax type from taxRates
    */
    'taxType'?: string;
    /**
    * see TaxRates
    */
    'taxName'?: string;
    /**
    * Optional Tracking Category – see Tracking. Any JournalLine can have a maximum of 2 <TrackingCategory> elements.
    */
    'trackingCategories'?: Array<TrackingCategory>;
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
