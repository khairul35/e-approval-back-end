import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CreditNote } from '././creditNote';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Overpayment } from '././overpayment';
import { Payment } from '././payment';
import { Prepayment } from '././prepayment';
import { ValidationError } from '././validationError';
export declare class Invoice {
    /**
    * See Invoice Types
    */
    'type'?: Invoice.TypeEnum;
    'contact'?: Contact;
    /**
    * See LineItems
    */
    'lineItems'?: Array<LineItem>;
    /**
    * Date invoice was issued – YYYY-MM-DD. If the Date element is not specified it will default to the current date based on the timezone setting of the organisation
    */
    'date'?: string;
    /**
    * Date invoice is due – YYYY-MM-DD
    */
    'dueDate'?: string;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * ACCREC – Unique alpha numeric code identifying invoice (when missing will auto-generate from your Organisation Invoice Settings) (max length = 255)
    */
    'invoiceNumber'?: string;
    /**
    * ACCREC only – additional reference number
    */
    'reference'?: string;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    /**
    * URL link to a source document – shown as “Go to [appName]” in the Xero app
    */
    'url'?: string;
    'currencyCode'?: CurrencyCode;
    /**
    * The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used. (max length = [18].[6])
    */
    'currencyRate'?: number;
    /**
    * See Invoice Status Codes
    */
    'status'?: Invoice.StatusEnum;
    /**
    * Boolean to set whether the invoice in the Xero app should be marked as “sent”. This can be set only on invoices that have been approved
    */
    'sentToContact'?: boolean;
    /**
    * Shown on sales invoices (Accounts Receivable) when this has been set
    */
    'expectedPaymentDate'?: string;
    /**
    * Shown on bills (Accounts Payable) when this has been set
    */
    'plannedPaymentDate'?: string;
    /**
    * CIS deduction for UK contractors
    */
    'cISDeduction'?: number;
    /**
    * CIS Deduction rate for the organisation
    */
    'cISRate'?: number;
    /**
    * Total of invoice excluding taxes
    */
    'subTotal'?: number;
    /**
    * Total tax on invoice
    */
    'totalTax'?: number;
    /**
    * Total of Invoice tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts
    */
    'total'?: number;
    /**
    * Total of discounts applied on the invoice line items
    */
    'totalDiscount'?: number;
    /**
    * Xero generated unique identifier for invoice
    */
    'invoiceID'?: string;
    /**
    * Xero generated unique identifier for repeating invoices
    */
    'repeatingInvoiceID'?: string;
    /**
    * boolean to indicate if an invoice has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * boolean to indicate if an invoice has a discount
    */
    'isDiscounted'?: boolean;
    /**
    * See Payments
    */
    'payments'?: Array<Payment>;
    /**
    * See Prepayments
    */
    'prepayments'?: Array<Prepayment>;
    /**
    * See Overpayments
    */
    'overpayments'?: Array<Overpayment>;
    /**
    * Amount remaining to be paid on invoice
    */
    'amountDue'?: number;
    /**
    * Sum of payments received for invoice
    */
    'amountPaid'?: number;
    /**
    * The date the invoice was fully paid. Only returned on fully paid invoices
    */
    'fullyPaidOnDate'?: string;
    /**
    * Sum of all credit notes, over-payments and pre-payments applied to invoice
    */
    'amountCredited'?: number;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * Details of credit notes that have been applied to an invoice
    */
    'creditNotes'?: Array<CreditNote>;
    /**
    * Displays array of attachments from the API
    */
    'attachments'?: Array<Attachment>;
    /**
    * A boolean to indicate if a invoice has an validation errors
    */
    'hasErrors'?: boolean;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
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
export declare namespace Invoice {
    enum TypeEnum {
        ACCPAY,
        ACCPAYCREDIT,
        APOVERPAYMENT,
        APPREPAYMENT,
        ACCREC,
        ACCRECCREDIT,
        AROVERPAYMENT,
        ARPREPAYMENT
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
