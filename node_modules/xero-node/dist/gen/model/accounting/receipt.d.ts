import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { User } from '././user';
import { ValidationError } from '././validationError';
export declare class Receipt {
    /**
    * Date of receipt – YYYY-MM-DD
    */
    'date'?: string;
    'contact'?: Contact;
    'lineItems'?: Array<LineItem>;
    'user'?: User;
    /**
    * Additional reference number
    */
    'reference'?: string;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * Total of receipt excluding taxes
    */
    'subTotal'?: number;
    /**
    * Total tax on receipt
    */
    'totalTax'?: number;
    /**
    * Total of receipt tax inclusive (i.e. SubTotal + TotalTax)
    */
    'total'?: number;
    /**
    * Xero generated unique identifier for receipt
    */
    'receiptID'?: string;
    /**
    * Current status of receipt – see status types
    */
    'status'?: Receipt.StatusEnum;
    /**
    * Xero generated sequence number for receipt in current claim for a given user
    */
    'receiptNumber'?: string;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * boolean to indicate if a receipt has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * URL link to a source document – shown as “Go to [appName]” in the Xero app
    */
    'url'?: string;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * Displays array of warning messages from the API
    */
    'warnings'?: Array<ValidationError>;
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
export declare namespace Receipt {
    enum StatusEnum {
        DRAFT,
        SUBMITTED,
        AUTHORISED,
        DECLINED,
        VOIDED
    }
}
