export declare class StatutoryDeductionLine {
    /**
    * Xero identifier for payroll statutory deduction type
    */
    'statutoryDeductionTypeID'?: string;
    /**
    * The amount of the statutory deduction line
    */
    'amount'?: number;
    /**
    * Fixed Amount
    */
    'fixedAmount'?: number;
    /**
    * Identifies if the tax line is a manual adjustment
    */
    'manualAdjustment'?: boolean;
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
