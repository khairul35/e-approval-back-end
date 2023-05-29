import { LineItemItem } from '././lineItemItem';
import { LineItemTracking } from '././lineItemTracking';
export declare class LineItem {
    /**
    * LineItem unique ID
    */
    'lineItemID'?: string;
    /**
    * Description needs to be at least 1 char long. A line item with just a description (i.e no unit amount or quantity) can be created by specifying just a <Description> element that contains at least 1 character
    */
    'description'?: string;
    /**
    * LineItem Quantity
    */
    'quantity'?: number;
    /**
    * LineItem Unit Amount
    */
    'unitAmount'?: number;
    /**
    * See Items
    */
    'itemCode'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * The associated account ID related to this line item
    */
    'accountID'?: string;
    /**
    * The tax type from TaxRates
    */
    'taxType'?: string;
    /**
    * The tax amount is auto calculated as a percentage of the line amount (see below) based on the tax rate. This value can be overriden if the calculated <TaxAmount> is not correct.
    */
    'taxAmount'?: number;
    'item'?: LineItemItem;
    /**
    * If you wish to omit either the Quantity or UnitAmount you can provide a LineAmount and Xero will calculate the missing amount for you. The line amount reflects the discounted price if either a DiscountRate or DiscountAmount has been used i.e. LineAmount = Quantity * Unit Amount * ((100 - DiscountRate)/100) or LineAmount = (Quantity * UnitAmount) - DiscountAmount
    */
    'lineAmount'?: number;
    /**
    * Optional Tracking Category – see Tracking.  Any LineItem can have a  maximum of 2 <TrackingCategory> elements.
    */
    'tracking'?: Array<LineItemTracking>;
    /**
    * Percentage discount being applied to a line item (only supported on  ACCREC invoices – ACC PAY invoices and credit notes in Xero do not support discounts
    */
    'discountRate'?: number;
    /**
    * Discount amount being applied to a line item. Only supported on ACCREC invoices and quotes. ACCPAY invoices and credit notes in Xero do not support discounts.
    */
    'discountAmount'?: number;
    /**
    * The Xero identifier for a Repeating Invoice
    */
    'repeatingInvoiceID'?: string;
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
