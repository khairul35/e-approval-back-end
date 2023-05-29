export declare class EarningsTemplate {
    /**
    * The Xero identifier for the earnings template
    */
    'payTemplateEarningID'?: string;
    /**
    * The rate per unit
    */
    'ratePerUnit'?: number;
    /**
    * The rate per unit
    */
    'numberOfUnits'?: number;
    /**
    * The fixed amount per period
    */
    'fixedAmount'?: number;
    /**
    * The corresponding earnings rate identifier
    */
    'earningsRateID'?: string;
    /**
    * The read-only name of the Earning Template.
    */
    'name'?: string;
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
