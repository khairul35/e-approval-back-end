import { ContactResponse } from '././contactResponse';
import { LineItemResponse } from '././lineItemResponse';
export declare class CreditNoteResponse {
    /**
    * Xero Identifier of credit note
    */
    'creditNoteId'?: string;
    'contact'?: ContactResponse;
    /**
    * Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode
    */
    'total'?: number;
    /**
    * Not included in summary mode
    */
    'lineItems'?: Array<LineItemResponse>;
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
