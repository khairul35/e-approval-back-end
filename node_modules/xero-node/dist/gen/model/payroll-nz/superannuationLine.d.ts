export declare class SuperannuationLine {
    /**
    * Xero identifier for payroll superannuation type
    */
    'superannuationTypeID'?: string;
    /**
    * Benefit display name
    */
    'displayName'?: string;
    /**
    * The amount of the superannuation line
    */
    'amount'?: number;
    /**
    * Superannuation fixed amount
    */
    'fixedAmount'?: number;
    /**
    * Superannuation rate percentage
    */
    'percentage'?: number;
    /**
    * manual adjustment made
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
