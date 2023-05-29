export declare class BenefitLine {
    /**
    * Xero identifier for payroll benefit type
    */
    'benefitTypeID'?: string;
    /**
    * Benefit display name
    */
    'displayName'?: string;
    /**
    * The amount of the benefit line.
    */
    'amount'?: number;
    /**
    * Benefit fixed amount
    */
    'fixedAmount'?: number;
    /**
    * Benefit rate percentage
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
