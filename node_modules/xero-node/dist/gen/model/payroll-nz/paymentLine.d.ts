export declare class PaymentLine {
    /**
    * Xero identifier for payroll payment line
    */
    'paymentLineID'?: string;
    /**
    * The amount of the payment line
    */
    'amount'?: number;
    /**
    * The account number
    */
    'accountNumber'?: string;
    /**
    * The account sort code
    */
    'sortCode'?: string;
    /**
    * The account name
    */
    'accountName'?: string;
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
