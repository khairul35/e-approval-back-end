import { Attachment } from '././attachment';
import { LineAmountTypes } from '././lineAmountTypes';
import { ManualJournalLine } from '././manualJournalLine';
import { ValidationError } from '././validationError';
export declare class ManualJournal {
    /**
    * Description of journal being posted
    */
    'narration': string;
    /**
    * See JournalLines
    */
    'journalLines'?: Array<ManualJournalLine>;
    /**
    * Date journal was posted – YYYY-MM-DD
    */
    'date'?: string;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * See Manual Journal Status Codes
    */
    'status'?: ManualJournal.StatusEnum;
    /**
    * Url link to a source document – shown as “Go to [appName]” in the Xero app
    */
    'url'?: string;
    /**
    * Boolean – default is true if not specified
    */
    'showOnCashBasisReports'?: boolean;
    /**
    * Boolean to indicate if a manual journal has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * The Xero identifier for a Manual Journal
    */
    'manualJournalID'?: string;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
    /**
    * Displays array of warning messages from the API
    */
    'warnings'?: Array<ValidationError>;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * Displays array of attachments from the API
    */
    'attachments'?: Array<Attachment>;
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
export declare namespace ManualJournal {
    enum StatusEnum {
        DRAFT,
        POSTED,
        DELETED,
        VOIDED,
        ARCHIVED
    }
}
