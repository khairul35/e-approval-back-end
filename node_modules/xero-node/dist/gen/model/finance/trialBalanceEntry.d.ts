export declare class TrialBalanceEntry {
    /**
    * Net movement or net balance in the account
    */
    'value'?: number;
    /**
    * Sign (Debit/Credit) of the movement of balance in the account
    */
    'entryType'?: string;
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
