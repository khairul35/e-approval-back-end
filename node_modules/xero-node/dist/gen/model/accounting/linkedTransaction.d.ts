import { ValidationError } from '././validationError';
export declare class LinkedTransaction {
    /**
    * Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice
    */
    'sourceTransactionID'?: string;
    /**
    * The line item identifier from the source transaction.
    */
    'sourceLineItemID'?: string;
    /**
    * Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
    */
    'contactID'?: string;
    /**
    * Filter by the TargetTransactionID. Get all the linked transactions  allocated to a particular ACCREC invoice
    */
    'targetTransactionID'?: string;
    /**
    * The line item identifier from the target transaction. It is possible  to link multiple billable expenses to the same TargetLineItemID.
    */
    'targetLineItemID'?: string;
    /**
    * The Xero identifier for an Linked Transaction e.g./LinkedTransactions/297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'linkedTransactionID'?: string;
    /**
    * Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
    */
    'status'?: LinkedTransaction.StatusEnum;
    /**
    * This will always be BILLABLEEXPENSE. More types may be added in future.
    */
    'type'?: LinkedTransaction.TypeEnum;
    /**
    * The last modified date in UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * The Type of the source tranasction. This will be ACCPAY if the linked transaction was created from an invoice and SPEND if it was created from a bank transaction.
    */
    'sourceTransactionTypeCode'?: LinkedTransaction.SourceTransactionTypeCodeEnum;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
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
export declare namespace LinkedTransaction {
    enum StatusEnum {
        APPROVED,
        DRAFT,
        ONDRAFT,
        BILLED,
        VOIDED
    }
    enum TypeEnum {
        BILLABLEEXPENSE
    }
    enum SourceTransactionTypeCodeEnum {
        ACCPAY,
        SPEND
    }
}
