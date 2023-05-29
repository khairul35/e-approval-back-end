import { Allocation } from '././allocation';
import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Payment } from '././payment';
export declare class Overpayment {
    /**
    * See Overpayment Types
    */
    'type'?: Overpayment.TypeEnum;
    'contact'?: Contact;
    /**
    * The date the overpayment is created YYYY-MM-DD
    */
    'date'?: string;
    /**
    * See Overpayment Status Codes
    */
    'status'?: Overpayment.StatusEnum;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * See Overpayment Line Items
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The subtotal of the overpayment excluding taxes
    */
    'subTotal'?: number;
    /**
    * The total tax on the overpayment
    */
    'totalTax'?: number;
    /**
    * The total of the overpayment (subtotal + total tax)
    */
    'total'?: number;
    /**
    * UTC timestamp of last update to the overpayment
    */
    'updatedDateUTC'?: Date;
    'currencyCode'?: CurrencyCode;
    /**
    * Xero generated unique identifier
    */
    'overpaymentID'?: string;
    /**
    * The currency rate for a multicurrency overpayment. If no rate is specified, the XE.com day rate is used
    */
    'currencyRate'?: number;
    /**
    * The remaining credit balance on the overpayment
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
    * boolean to indicate if a overpayment has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * See Attachments
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
export declare namespace Overpayment {
    enum TypeEnum {
        RECEIVEOVERPAYMENT,
        SPENDOVERPAYMENT,
        AROVERPAYMENT
    }
    enum StatusEnum {
        AUTHORISED,
        PAID,
        VOIDED
    }
}
