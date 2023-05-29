import { Allocation } from '././allocation';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Payment } from '././payment';
import { ValidationError } from '././validationError';
export declare class CreditNote {
    /**
    * See Credit Note Types
    */
    'type'?: CreditNote.TypeEnum;
    'contact'?: Contact;
    /**
    * The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation
    */
    'date'?: string;
    /**
    * Date invoice is due – YYYY-MM-DD
    */
    'dueDate'?: string;
    /**
    * See Credit Note Status Codes
    */
    'status'?: CreditNote.StatusEnum;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * See Invoice Line Items
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The subtotal of the credit note excluding taxes
    */
    'subTotal'?: number;
    /**
    * The total tax on the credit note
    */
    'totalTax'?: number;
    /**
    * The total of the Credit Note(subtotal + total tax)
    */
    'total'?: number;
    /**
    * CIS deduction for UK contractors
    */
    'cISDeduction'?: number;
    /**
    * CIS Deduction rate for the organisation
    */
    'cISRate'?: number;
    /**
    * UTC timestamp of last update to the credit note
    */
    'updatedDateUTC'?: Date;
    'currencyCode'?: CurrencyCode;
    /**
    * Date when credit note was fully paid(UTC format)
    */
    'fullyPaidOnDate'?: string;
    /**
    * Xero generated unique identifier
    */
    'creditNoteID'?: string;
    /**
    * ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings)
    */
    'creditNoteNumber'?: string;
    /**
    * ACCRECCREDIT only – additional reference number
    */
    'reference'?: string;
    /**
    * boolean to indicate if a credit note has been sent to a contact via  the Xero app (currently read only)
    */
    'sentToContact'?: boolean;
    /**
    * The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used
    */
    'currencyRate'?: number;
    /**
    * The remaining credit balance on the Credit Note
    */
    'remainingCredit'?: number;
    /**
    * See Allocations
    */
    'allocations'?: Array<Allocation>;
    /**
    * The amount of applied to an invoice
    */
    'appliedAmount'?: number;
    /**
    * See Payments
    */
    'payments'?: Array<Payment>;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
    /**
    * boolean to indicate if a credit note has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * A boolean to indicate if a credit note has an validation errors
    */
    'hasErrors'?: boolean;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * Displays array of warning messages from the API
    */
    'warnings'?: Array<ValidationError>;
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
export declare namespace CreditNote {
    enum TypeEnum {
        ACCPAYCREDIT,
        ACCRECCREDIT
    }
    enum StatusEnum {
        DRAFT,
        SUBMITTED,
        DELETED,
        AUTHORISED,
        PAID,
        VOIDED
    }
}
