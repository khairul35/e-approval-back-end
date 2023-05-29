export declare class TotalDetail {
    /**
    * Total paid invoice and cash value within the period.
    */
    'totalPaid'?: number;
    /**
    * Total outstanding invoice value within the period.
    */
    'totalOutstanding'?: number;
    /**
    * Total unapplied credited value within the period.
    */
    'totalCreditedUnApplied'?: number;
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
