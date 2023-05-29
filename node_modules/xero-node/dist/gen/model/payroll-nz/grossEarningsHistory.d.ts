export declare class GrossEarningsHistory {
    /**
    * Number of days the employee worked in the pay period (0 - 365)
    */
    'daysPaid'?: number;
    /**
    * Number of full weeks the employee didn\'t work in the pay period (0 - 52)
    */
    'unpaidWeeks'?: number;
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
