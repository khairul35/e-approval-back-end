export declare class DataSourceResponse {
    /**
    * Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero.   This gives an indication on the certainty of correctness of the data.
    */
    'directBankFeed'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a indirect bank feed to Xero (usually via Yodlee).   This gives an indication on the certainty of correctness of the data.
    */
    'indirectBankFeed'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a CSV file upload in to Xero.   This gives an indication on the certainty of correctness of the data.
    */
    'fileUpload'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was manually keyed in to Xero.   This gives an indication on the certainty of correctness of the data.
    */
    'manual'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero.  This gives an indication on the certainty of correctness of the data.  Only positive transactions are included.
    */
    'directBankFeedPos'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a indirect bank feed to Xero (usually via Yodlee).   This gives an indication on the certainty of correctness of the data. Only positive transactions are included.
    */
    'indirectBankFeedPos'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a CSV file upload in to Xero.   This gives an indication on the certainty of correctness of the data. Only positive transactions are included.
    */
    'fileUploadPos'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was manually keyed in to Xero.   This gives an indication on the certainty of correctness of the data. Only positive transactions are included.
    */
    'manualPos'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.
    */
    'directBankFeedNeg'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a indirect bank feed to Xero (usually via Yodlee).   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.
    */
    'indirectBankFeedNeg'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was a CSV file upload in to Xero.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.
    */
    'fileUploadNeg'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was manually keyed in to Xero.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.
    */
    'manualNeg'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was any other category.   This gives an indication on the certainty of correctness of the data.  Only positive transactions are included.
    */
    'otherPos'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was any other category.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.
    */
    'otherNeg'?: number;
    /**
    * Sum of the amounts of all statement lines where the source of the data was any other category.   This gives an indication on the certainty of correctness of the data.
    */
    'other'?: number;
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
