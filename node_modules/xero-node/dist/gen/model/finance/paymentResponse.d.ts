import { CreditNoteResponse } from '././creditNoteResponse';
import { InvoiceResponse } from '././invoiceResponse';
import { OverpaymentResponse } from '././overpaymentResponse';
import { PrepaymentResponse } from '././prepaymentResponse';
export declare class PaymentResponse {
    /**
    * Xero Identifier of payment
    */
    'paymentId'?: string;
    /**
    * Xero Identifier of batch payment. Present if the payment was created as part of a batch.
    */
    'batchPaymentId'?: string;
    /**
    * Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06
    */
    'date'?: string;
    /**
    * The amount of the payment
    */
    'amount'?: number;
    /**
    * The bank amount of the payment
    */
    'bankAmount'?: number;
    /**
    * Exchange rate when payment is received. Only used for non base currency invoices and credit notes e.g. 0.7500
    */
    'currencyRate'?: number;
    'invoice'?: InvoiceResponse;
    'creditNote'?: CreditNoteResponse;
    'prepayment'?: PrepaymentResponse;
    'overpayment'?: OverpaymentResponse;
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
