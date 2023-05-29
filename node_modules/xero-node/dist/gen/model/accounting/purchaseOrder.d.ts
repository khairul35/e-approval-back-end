import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { ValidationError } from '././validationError';
export declare class PurchaseOrder {
    'contact'?: Contact;
    /**
    * See LineItems
    */
    'lineItems'?: Array<LineItem>;
    /**
    * Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation
    */
    'date'?: string;
    /**
    * Date the goods are to be delivered – YYYY-MM-DD
    */
    'deliveryDate'?: string;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings)
    */
    'purchaseOrderNumber'?: string;
    /**
    * Additional reference number
    */
    'reference'?: string;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    'currencyCode'?: CurrencyCode;
    /**
    * See Purchase Order Status Codes
    */
    'status'?: PurchaseOrder.StatusEnum;
    /**
    * Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed
    */
    'sentToContact'?: boolean;
    /**
    * The address the goods are to be delivered to
    */
    'deliveryAddress'?: string;
    /**
    * The person that the delivery is going to
    */
    'attentionTo'?: string;
    /**
    * The phone number for the person accepting the delivery
    */
    'telephone'?: string;
    /**
    * A free text feild for instructions (500 characters max)
    */
    'deliveryInstructions'?: string;
    /**
    * The date the goods are expected to arrive.
    */
    'expectedArrivalDate'?: string;
    /**
    * Xero generated unique identifier for purchase order
    */
    'purchaseOrderID'?: string;
    /**
    * The currency rate for a multicurrency purchase order. If no rate is specified, the XE.com day rate is used.
    */
    'currencyRate'?: number;
    /**
    * Total of purchase order excluding taxes
    */
    'subTotal'?: number;
    /**
    * Total tax on purchase order
    */
    'totalTax'?: number;
    /**
    * Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax)
    */
    'total'?: number;
    /**
    * Total of discounts applied on the purchase order line items
    */
    'totalDiscount'?: number;
    /**
    * boolean to indicate if a purchase order has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
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
export declare namespace PurchaseOrder {
    enum StatusEnum {
        DRAFT,
        SUBMITTED,
        AUTHORISED,
        BILLED,
        DELETED
    }
}
