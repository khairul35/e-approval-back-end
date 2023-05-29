export declare class AccountUsage {
    /**
    * The month this usage item contains data for
    */
    'month'?: string;
    /**
    * The account this usage item contains data for
    */
    'accountId'?: string;
    /**
    * The currency code this usage item contains data for
    */
    'currencyCode'?: string;
    /**
    * Total received
    */
    'totalReceived'?: number;
    /**
    * Count of received
    */
    'countReceived'?: number;
    /**
    * Total paid
    */
    'totalPaid'?: number;
    /**
    * Count of paid
    */
    'countPaid'?: number;
    /**
    * Total value of manual journals
    */
    'totalManualJournal'?: number;
    /**
    * Count of manual journals
    */
    'countManualJournal'?: number;
    /**
    * The name of the account
    */
    'accountName'?: string;
    /**
    * Shown if set
    */
    'reportingCode'?: string;
    /**
    * Shown if set
    */
    'reportingCodeName'?: string;
    /**
    * Last modified date UTC format
    */
    'reportCodeUpdatedDateUtc'?: Date;
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
