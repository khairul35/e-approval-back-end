export declare class TotalOther {
    /**
    * Total outstanding invoice value within the period where the invoices are more than 90 days old
    */
    'totalOutstandingAged'?: number;
    /**
    * Total voided value.
    */
    'totalVoided'?: number;
    /**
    * Total credited value.
    */
    'totalCredited'?: number;
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
