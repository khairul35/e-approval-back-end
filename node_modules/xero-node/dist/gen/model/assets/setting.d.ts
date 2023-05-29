export declare class Setting {
    /**
    * The prefix used for fixed asset numbers (“FA-” by default)
    */
    'assetNumberPrefix'?: string;
    /**
    * The next available sequence number
    */
    'assetNumberSequence'?: string;
    /**
    * The date depreciation calculations started on registered fixed assets in Xero
    */
    'assetStartDate'?: string;
    /**
    * The last depreciation date
    */
    'lastDepreciationDate'?: string;
    /**
    * Default account that gains are posted to
    */
    'defaultGainOnDisposalAccountId'?: string;
    /**
    * Default account that losses are posted to
    */
    'defaultLossOnDisposalAccountId'?: string;
    /**
    * Default account that capital gains are posted to
    */
    'defaultCapitalGainOnDisposalAccountId'?: string;
    /**
    * opt in for tax calculation
    */
    'optInForTax'?: boolean;
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
