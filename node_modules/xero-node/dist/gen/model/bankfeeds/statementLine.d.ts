import { CreditDebitIndicator } from '././creditDebitIndicator';
/**
* the lines details for a statement
*/
export declare class StatementLine {
    /**
    * The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD
    */
    'postedDate'?: string;
    /**
    * Transaction description
    */
    'description'?: string;
    /**
    * Transaction amount
    */
    'amount'?: number;
    'creditDebitIndicator'?: CreditDebitIndicator;
    /**
    * Financial institute\'s internal transaction identifier. If provided this field is factored into duplicate detection.
    */
    'transactionId'?: string;
    /**
    * Typically the merchant or payee name
    */
    'payeeName'?: string;
    /**
    * Optional field to enhance the Description
    */
    'reference'?: string;
    /**
    * The cheque/check number
    */
    'chequeNumber'?: string;
    /**
    * Descriptive transaction type
    */
    'transactionType'?: string;
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
