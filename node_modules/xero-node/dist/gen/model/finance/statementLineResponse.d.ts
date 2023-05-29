import { BankTransactionResponse } from '././bankTransactionResponse';
import { PaymentResponse } from '././paymentResponse';
export declare class StatementLineResponse {
    /**
    * Xero Identifier of statement line
    */
    'statementLineId'?: string;
    /**
    * Date of when statement line was posted
    */
    'postedDate'?: string;
    /**
    * Payee description of statement line
    */
    'payee'?: string;
    /**
    * Reference description of statement line
    */
    'reference'?: string;
    /**
    * Notes description of statement line
    */
    'notes'?: string;
    /**
    * Cheque number of statement line
    */
    'chequeNo'?: string;
    /**
    * Amount of statement line
    */
    'amount'?: number;
    /**
    * Transaction date of statement line
    */
    'transactionDate'?: string;
    /**
    * Type of statement line
    */
    'type'?: string;
    /**
    * Boolean to show if statement line is reconciled
    */
    'isReconciled'?: boolean;
    /**
    * Boolean to show if statement line is duplicate
    */
    'isDuplicate'?: boolean;
    /**
    * Boolean to show if statement line is deleted
    */
    'isDeleted'?: boolean;
    /**
    * List of payments associated with reconciled statement lines
    */
    'payments'?: Array<PaymentResponse>;
    /**
    * List of bank transactions associated with reconciled statement lines
    */
    'bankTransactions'?: Array<BankTransactionResponse>;
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
