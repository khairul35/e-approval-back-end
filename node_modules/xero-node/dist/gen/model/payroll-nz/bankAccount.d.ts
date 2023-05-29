export declare class BankAccount {
    /**
    * Bank account name (max length = 32)
    */
    'accountName': string;
    /**
    * Bank account number (digits only; max length = 8)
    */
    'accountNumber': string;
    /**
    * Bank account sort code (6 digits)
    */
    'sortCode': string;
    /**
    * Particulars that appear on the statement.
    */
    'particulars'?: string;
    /**
    * Code of a transaction that appear on the statement.
    */
    'code'?: string;
    /**
    * Dollar amount of a transaction.
    */
    'dollarAmount'?: number;
    /**
    * Statement Text/reference for a transaction that appear on the statement.
    */
    'reference'?: string;
    /**
    * Calculation type for the transaction can be \'Fixed Amount\' or \'Balance\'
    */
    'calculationType'?: BankAccount.CalculationTypeEnum;
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
export declare namespace BankAccount {
    enum CalculationTypeEnum {
        FixedAmount,
        Balance
    }
}
