export declare class BudgetBalance {
    /**
    * Period the amount applies to (e.g. “2019-08”)
    */
    'period'?: string;
    /**
    * LineItem Quantity
    */
    'amount'?: number;
    /**
    * Budgeted amount
    */
    'unitAmount'?: number;
    /**
    * Any footnotes associated with this balance
    */
    'notes'?: string;
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
