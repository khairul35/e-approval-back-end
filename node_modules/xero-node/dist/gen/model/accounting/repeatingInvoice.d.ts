import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Schedule } from '././schedule';
export declare class RepeatingInvoice {
    /**
    * See Invoice Types
    */
    'type'?: RepeatingInvoice.TypeEnum;
    'contact'?: Contact;
    'schedule'?: Schedule;
    /**
    * See LineItems
    */
    'lineItems'?: Array<LineItem>;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * ACCREC only – additional reference number
    */
    'reference'?: string;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    'currencyCode'?: CurrencyCode;
    /**
    * One of the following - DRAFT or AUTHORISED – See Invoice Status Codes
    */
    'status'?: RepeatingInvoice.StatusEnum;
    /**
    * Total of invoice excluding taxes
    */
    'subTotal'?: number;
    /**
    * Total tax on invoice
    */
    'totalTax'?: number;
    /**
    * Total of Invoice tax inclusive (i.e. SubTotal + TotalTax)
    */
    'total'?: number;
    /**
    * Xero generated unique identifier for repeating invoice template
    */
    'repeatingInvoiceID'?: string;
    /**
    * Xero generated unique identifier for repeating invoice template
    */
    'iD'?: string;
    /**
    * Boolean to indicate if an invoice has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * Displays array of attachments from the API
    */
    'attachments'?: Array<Attachment>;
    /**
    * Boolean to indicate whether the invoice has been approved for sending
    */
    'approvedForSending'?: boolean;
    /**
    * Boolean to indicate whether a copy is sent to sender\'s email
    */
    'sendCopy'?: boolean;
    /**
    * Boolean to indicate whether the invoice in the Xero app displays as \"sent\"
    */
    'markAsSent'?: boolean;
    /**
    * Boolean to indicate whether to include PDF attachment
    */
    'includePDF'?: boolean;
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
export declare namespace RepeatingInvoice {
    enum TypeEnum {
        ACCPAY,
        ACCREC
    }
    enum StatusEnum {
        DRAFT,
        AUTHORISED,
        DELETED
    }
}
