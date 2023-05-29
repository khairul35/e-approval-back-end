import { BookDepreciationSetting } from '././bookDepreciationSetting';
export declare class AssetType {
    /**
    * Xero generated unique identifier for asset types
    */
    'assetTypeId'?: string;
    /**
    * The name of the asset type
    */
    'assetTypeName': string;
    /**
    * The asset account for fixed assets of this type
    */
    'fixedAssetAccountId'?: string;
    /**
    * The expense account for the depreciation of fixed assets of this type
    */
    'depreciationExpenseAccountId'?: string;
    /**
    * The account for accumulated depreciation of fixed assets of this type
    */
    'accumulatedDepreciationAccountId'?: string;
    'bookDepreciationSetting': BookDepreciationSetting;
    /**
    * All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed.
    */
    'locks'?: number;
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
