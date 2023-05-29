export declare class BatchPaymentDelete {
    /**
    * The Xero generated unique identifier for the bank transaction (read-only)
    */
    'batchPaymentID': string;
    /**
    * The status of the batch payment.
    */
    'status': string;
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
