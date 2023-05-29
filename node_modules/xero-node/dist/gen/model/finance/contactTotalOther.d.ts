export declare class ContactTotalOther {
    /**
    * Total outstanding invoice value for the contact within the period where the invoices are more than 90 days old
    */
    'totalOutstandingAged'?: number;
    /**
    * Total voided value for the contact.
    */
    'totalVoided'?: number;
    /**
    * Total credited value for the contact.
    */
    'totalCredited'?: number;
    /**
    * Number of transactions for the contact.
    */
    'transactionCount'?: number;
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
