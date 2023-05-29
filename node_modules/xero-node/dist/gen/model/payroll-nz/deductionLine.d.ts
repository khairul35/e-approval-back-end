export declare class DeductionLine {
    /**
    * Xero identifier for payroll deduction
    */
    'deductionTypeID'?: string;
    /**
    * name of earnings rate for display in UI
    */
    'displayName'?: string;
    /**
    * The amount of the deduction line
    */
    'amount'?: number;
    /**
    * Identifies if the deduction is subject to tax
    */
    'subjectToTax'?: boolean;
    /**
    * Deduction rate percentage
    */
    'percentage'?: number;
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
