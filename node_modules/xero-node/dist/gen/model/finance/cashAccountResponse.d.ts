export declare class CashAccountResponse {
    /**
    * Total value of transactions in the journals which are not reconciled to bank statement lines, and have a positive (debit) value.
    */
    'unreconciledAmountPos'?: number;
    /**
    * Total value of transactions in the journals which are not reconciled to bank statement lines, and have a negative (credit) value.
    */
    'unreconciledAmountNeg'?: number;
    /**
    * Starting (or historic) balance from the journals (manually keyed in by users on account creation - unverified).
    */
    'startingBalance'?: number;
    /**
    * Current cash at bank accounting value from the journals.
    */
    'accountBalance'?: number;
    /**
    * Currency which the cashAccount transactions relate to.
    */
    'balanceCurrency'?: string;
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
