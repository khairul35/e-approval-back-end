import { Allocation } from '././allocation';
import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Payment } from '././payment';
export declare class Prepayment {
    /**
    * See Prepayment Types
    */
    'type'?: Prepayment.TypeEnum;
    'contact'?: Contact;
    /**
    * The date the prepayment is created YYYY-MM-DD
    */
    'date'?: string;
    /**
    * See Prepayment Status Codes
    */
    'status'?: Prepayment.StatusEnum;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * See Prepayment Line Items
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The subtotal of the prepayment excluding taxes
    */
    'subTotal'?: number;
    /**
    * The total tax on the prepayment
    */
    'totalTax'?: number;
    /**
    * The total of the prepayment(subtotal + total tax)
    */
    'total'?: number;
    /**
    * Returns Invoice number field. Reference field isn\'t available.
    */
    'reference'?: string;
    /**
    * UTC timestamp of last update to the prepayment
    */
    'updatedDateUTC'?: Date;
    'currencyCode'?: CurrencyCode;
    /**
    * Xero generated unique identifier
    */
    'prepaymentID'?: string;
    /**
    * The currency rate for a multicurrency prepayment. If no rate is specified, the XE.com day rate is used
    */
    'currencyRate'?: number;
    /**
    * The remaining credit balance on the prepayment
    */
    'remainingCredit'?: number;
    /**
    * See Allocations
    */
    'allocations'?: Array<Allocation>;
    /**
    * See Payments
    */
    'payments'?: Array<Payment>;
    /**
    * The amount of applied to an invoice
    */
    'appliedAmount'?: number;
    /**
    * boolean to indicate if a prepayment has an attachment
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
export declare namespace Prepayment {
    enum TypeEnum {
        RECEIVEPREPAYMENT,
        SPENDPREPAYMENT,
        ARPREPAYMENT,
        APPREPAYMENT
    }
    enum StatusEnum {
        AUTHORISED,
        PAID,
        VOIDED
    }
}
